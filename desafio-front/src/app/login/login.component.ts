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
    if(this.modelEntity.username == 'Administrador' && this.modelEntity.password == '5225')
    {
      localStorage.setItem('username', 'Administrador');
      localStorage.setItem('password', '5225');
      localStorage.setItem('role', 'ADMIN');
    } else if(this.modelEntity.username == 'Usuario' && this.modelEntity.password == '1234') {
      localStorage.setItem('username', 'Usuario');
      localStorage.setItem('password', '1234');
      localStorage.setItem('role', 'USUARIO');
    } else {
      console.log('Error');
      return;
    }
    this.toastr.success('Logado');
  }

}
