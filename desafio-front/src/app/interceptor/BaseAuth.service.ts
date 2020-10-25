import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BaseAuth implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
      let username = localStorage.getItem('username');
      let password = localStorage.getItem('password');
      

      let userNameAndPassword = username + ":" + password;
      let tokenRequest;
      if (req.url.indexOf('viacep.com.br') < 0) {
        tokenRequest = req.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(userNameAndPassword)}`,
        },
      });
    } else {
      tokenRequest = req.clone({}); 
    }

      return next.handle(tokenRequest);
    }
}
