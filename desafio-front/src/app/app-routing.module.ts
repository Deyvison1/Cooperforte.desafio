import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { GerenciarComponent } from './cliente/gerenciar/gerenciar.component';
import { RegistrarComponent } from './cliente/registrar/registrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent, children:
    [
      {
        path: 'registrar', component: RegistrarComponent
      },
      {
        path: 'gerenciar', component: GerenciarComponent
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
