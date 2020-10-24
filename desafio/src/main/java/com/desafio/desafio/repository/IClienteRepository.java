package com.desafio.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafio.desafio.models.Cliente;

@Repository
public interface IClienteRepository extends JpaRepository<Cliente, Long> {
	Cliente findClienteById(Long id);
}
