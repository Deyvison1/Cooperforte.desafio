import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('role') == 'ADMIN') {
        return true;
      }
      else if(localStorage.getItem('role') == null) {
        this.router.navigate(['login']);
        this.toastr.warning('Precisa estar logado como Administrador para acessar essa rota');
        return false;
      } 
      else {
        this.router.navigate(['/cliente/gerenciar']);
        this.toastr.warning('Somente Administrador tem acesso a essa rota');
        return false;
      }
  }
}
