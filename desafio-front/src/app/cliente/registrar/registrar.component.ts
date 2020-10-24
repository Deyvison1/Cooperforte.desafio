import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private clienteService: ClienteService
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
        console.log(this.endereco);
      }, error => { console.log(error); }
    )
  }

  criarEmail(email: any): FormGroup {
    return this.fb.group({
      id: [email.id],
      email: [email.email]
    });
  }

  removerEmail(id: number) {
    this.emails.removeAt(id);
  }

  criarTelefone(telefone: any): FormGroup {
    return this.fb.group({
      id: [telefone.id],
      ddd: [telefone.ddd, [Validators.max(999), Validators.min(99)]],
      numero: [telefone.numero],
      tipo: [telefone.tipo]
    });
  }

  removeTelefone(id: number) {
    this.telefones.removeAt(id);
  }

  adicionarEmail() {
    this.emails.push(this.criarEmail({ id: 0 }));
  }

  adicionarTelefone() {
    this.telefones.push(this.criarTelefone({ id: 0 }))
  }

  salvarAlteracao() {
    this.cliente = Object.assign({}, this.form.value);
    this.cliente.endereco = this.formEndereco.value;
    console.log(this.cliente);
  }

  validationEndereco() {
    this.formEndereco = this.fb.group({
      id: [''],
      cep: [''],
      bairro: [''],
      logradouro: [''],
      complemento: [''],
      localidade: ['']
    });
  }
  
  validation() {
    this.form = this.fb.group({
      nome: [''],
      cpf: [''],
      telefones: this.fb.array([]),
      emails: this.fb.array([])
    });
  }

}
