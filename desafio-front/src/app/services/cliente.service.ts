import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseURL = 'http://localhost:8080/cliente';

  constructor(
    private http: HttpClient
  ) { }


  enderecoByCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
  
}
