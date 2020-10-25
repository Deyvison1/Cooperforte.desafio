import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxMaskModule, IConfig } from 'ngx-mask';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RegistrarComponent } from './cliente/registrar/registrar.component';
import { GerenciarComponent } from './cliente/gerenciar/gerenciar.component';
import { ClienteService } from './services/cliente.service';
import { BaseAuth } from './interceptor/BaseAuth.service';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    RegistrarComponent,
    GerenciarComponent,
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    HttpClientModule
  ],
  providers: [
    ClienteService,{
      provide: HTTP_INTERCEPTORS,
      useClass: BaseAuth,
      multi: true
    },
    AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: BaseAuth,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
