package com.desafio.desafio.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.desafio.desafio.enums.EnumUF;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Table(name = "enderecos")
@Entity
public class Endereco extends CreateId {

	@NotNull(message = "Campo obrigatorio")
	private String cep;
	@NotNull(message = "Campo obrigatorio")
	private String logradouro;
	@Column(nullable = true)
	private String complemento;
	@NotNull(message = "Campo obrigatorio")
	private String bairro;
	@NotNull(message = "Campo obrigatorio")
	private String localidade;
	@NotNull(message = "Campo obrigatorio")
	private EnumUF uf;
	
	
}
