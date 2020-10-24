package com.desafio.desafio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.desafio.models.Cliente;
import com.desafio.desafio.services.ClienteService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({"/cliente"})
public class ClienteController {

	// Injecao de Dependencia
	@Autowired
	private ClienteService service;
	
	// Listar Todos Clientes
	@GetMapping
	public ResponseEntity<List<Cliente>> todosClientes(){
		return ResponseEntity.ok(service.todos());
	}
	// Adicionar Cliente
	@PostMapping
	public ResponseEntity<Cliente> adicionar(@RequestBody Cliente cliente)
	{
		return ResponseEntity.ok(service.adicionar(cliente));
	}
	// Deletar Cliente
	@DeleteMapping("/{id}")
	public ResponseEntity<Cliente> adicionar(@PathVariable Long id)
	{
		return ResponseEntity.ok(service.deletar(id));
	}
	
}
