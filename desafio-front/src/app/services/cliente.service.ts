import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseURL = 'http://localhost:8080/cliente';

  constructor(
    private http: HttpClient
  ) { }

  buscarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseURL);
  }

  adicionar(cliente: Cliente) {
    return this.http.post(`${this.baseURL}`, cliente);
  }

  deletar(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  enderecoByCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
  
}
