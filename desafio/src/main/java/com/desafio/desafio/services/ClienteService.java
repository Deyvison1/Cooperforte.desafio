package com.desafio.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafio.desafio.models.Cliente;
import com.desafio.desafio.repository.IClienteRepository;

@Service
public class ClienteService {

	// Injecao de Dependencia do repositorio
	@Autowired
	private IClienteRepository repoCliente;
	
	// Metodo Adicionar Cliente
	public Cliente adicionar(Cliente cliente) {		
		return repoCliente.save(cliente);
	}
	
	// Metodo Listar Todos Clientes
	public List<Cliente> todos(){
		return repoCliente.findAll();
	}
	
	// Metodo Deletar Cliente
	public Cliente deletar(Long id)
	{
		Cliente cliente = repoCliente.findClienteById(id);
		
		repoCliente.delete(cliente);
		
		return cliente;
	}
}
