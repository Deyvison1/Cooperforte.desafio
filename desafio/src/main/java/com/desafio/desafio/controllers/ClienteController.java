package com.desafio.desafio.controllers;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"/cliente"})
public class ClienteController {

	// Injecao de Dependencia
	@Autowired
	private ClienteService service;
	
	// Listar Todos Clientes
	@GetMapping
	@PreAuthorize("hasRole('USUARIO') or hasRole('ADMIN')")
	public ResponseEntity<List<Cliente>> todosClientes(){
		return ResponseEntity.ok(service.todos());
	}
	// Adicionar Cliente
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping
	public ResponseEntity<Cliente> adicionar(@RequestBody Cliente cliente) throws Exception
	{
		try {
		return ResponseEntity.ok(service.adicionar(cliente));
		}
		catch (ConstraintViolationException e) {
			String resp = "";
			e.getConstraintViolations().forEach(d -> resp.concat(d.getMessageTemplate()+" "));
			throw new Exception(resp);
		}
	}
	// Deletar Cliente
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Cliente> adicionar(@PathVariable Long id)
	{
		return ResponseEntity.ok(service.deletar(id));
	}
	
}
