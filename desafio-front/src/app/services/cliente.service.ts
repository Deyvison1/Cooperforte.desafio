import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseURL = 'http://localhost:8080/cliente';

  headers =  new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { }

  buscarTodos(): Observable<Cliente[]> {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');

    let userAndPassowrd = username+":"+password;

    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic QWRtaW5pc3RyYWRvcjo1MjI1',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.get<Cliente[]>(this.baseURL);
  }

  adicionar(cliente: Cliente) {
    return this.http.post(`${this.baseURL}`, cliente, { headers: this.headers });
  }

  deletar(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  enderecoByCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }  
}


