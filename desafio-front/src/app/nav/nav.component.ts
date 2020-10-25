import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.logado();
  }

  pegarRole() {
    return localStorage.getItem('role');
  }

  sair() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    this.toastr.info('Deslogado');

    this.router.navigate(['/login']);
  }

  logado() {
    return (localStorage.getItem('username') && localStorage.getItem('password'))? true : false;
  }

}
