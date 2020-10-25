import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  cliente: Cliente = new Cliente();
  formEndereco: FormGroup;
  form: FormGroup;
  endereco: Endereco = new Endereco();

  get telefones(): FormArray {
    return <FormArray>this.form.get('telefones');
  }

  get emails(): FormArray {
    return <FormArray>this.form.get('emails');
  }

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.validationEndereco();
    this.validation();
  }

  buscarCep() {
    this.endereco = Object.assign({}, this.formEndereco.value);
    
    this.clienteService.enderecoByCep(this.endereco.cep).subscribe(
      (endereco: Endereco) => {
        this.endereco = endereco;
        let cep = this.endereco.cep.replace('-', '');
        this.endereco.cep = cep;
      }, error => { console.log(error); }
    )
  }

  criarEmail(email: any): FormGroup {
    return this.fb.group({
      id: [email.id],
      email: [email.email, Validators.required]
    });
  }

  removerEmail(id: number) {
    this.emails.removeAt(id);
  }

  criarTelefone(telefone: any): FormGroup {
    return this.fb.group({
      id: [telefone.id],
      ddd: [telefone.ddd, [Validators.required]],
      numero: [telefone.numero, [Validators.required]],
      tipo: [telefone.tipo]
    });
  }

  removeTelefone(id: number) {
    this.telefones.removeAt(id);
  }

  adicionarEmail() {
    this.emails.push(this.criarEmail({  }));
  }

  adicionarTelefone() {
    this.telefones.push(this.criarTelefone({  }))
  }

  salvarAlteracao() {
    this.cliente = Object.assign({},this.form.value);
    this.cliente.endereco = this.endereco;

    this.cliente.telefones.forEach(x => x.id == null);
    this.cliente.emails.forEach(x => x.id == null);


    this.clienteService.adicionar(this.cliente).subscribe(
      (cliente: Cliente) => {
        this.toastr.success('Sucesso');
        this.router.navigate(['/cliente/gerenciar']);
      }, error => { 
        this.toastr.error('Error'); 
      }
    );
  }

  validationEndereco() {
    this.formEndereco = this.fb.group({
      id: [''],
      cep: ['', [Validators.maxLength(9), Validators.minLength(8)]],
      bairro: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      complemento: [''],
      localidade: ['', [Validators.required]]
    });
  }
  
  validation() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      telefones: this.fb.array([]),
      emails: this.fb.array([])
    });
  }

}
