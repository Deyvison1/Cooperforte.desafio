import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelEntity: any = {};

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logado() {
    const logado = localStorage.getItem('username');
    if(logado == null)
    {
      this.router.navigate(['/login']);
    }
    return;
  }

  logar() {
    if(this.modelEntity.username == 'Administrador' && this.modelEntity.password == '123456')
    {
      localStorage.setItem('username', 'Administrador');
      localStorage.setItem('password', '123456');
      localStorage.setItem('role', 'ADMIN');
      this.router.navigate(['/cliente/gerenciar']);
    } else if(this.modelEntity.username == 'Usuario' && this.modelEntity.password == '123456') {
      localStorage.setItem('username', 'Usuario');
      localStorage.setItem('password', '123456');
      localStorage.setItem('role', 'USUARIO');
      this.router.navigate(['/cliente/gerenciar']);
    } else {
      this.toastr.error('Credenciais invalidadas');
      return;
    }
    this.toastr.success('Logado');
  }

}
