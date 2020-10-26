import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from './auth/auth-admin.guard';
import { AuthGuard } from './auth/auth/auth.guard';
import { ClienteComponent } from './cliente/cliente.component';
import { GerenciarComponent } from './cliente/gerenciar/gerenciar.component';
import { RegistrarComponent } from './cliente/registrar/registrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent, children:
    [
      {
        path: 'registrar', component: RegistrarComponent, canActivate: [AuthGuard, AuthAdminGuard],
      },
      {
        path: 'gerenciar', component: GerenciarComponent, canActivate: [AuthGuard]
      },
      {
        path: '', redirectTo: 'gerenciar', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'gerenciar', pathMatch: 'full'
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
