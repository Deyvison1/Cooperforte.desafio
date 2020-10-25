import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {


  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  
  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buscarTodosClientes();
  }

  abrirModal(modal: any) {
    modal.show();
  }

  excluir(cliente: Cliente) {
    this.clienteService.deletar(cliente.id).subscribe(
      (cliente: Cliente) => {
        this.toastr.success('Sucesso');
        this.buscarTodosClientes();
      }, error => { this.toastr.error('Erro ao deletar'); }
    );
  }

  detalhes(modal: any, cliente: Cliente) {
    this.abrirModal(modal);
    this.cliente = cliente;
    console.log(this.cliente);
  }

  buscarTodosClientes() {
    this.clienteService.buscarTodos().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
      }, error => { console.log(error); }
    );
  }

}