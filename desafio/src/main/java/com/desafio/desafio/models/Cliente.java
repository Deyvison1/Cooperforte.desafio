package com.desafio.desafio.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "clientes")
public class Cliente extends CreateId {

	
	@Size(min = 3, max = 100, message = "Campo deve ter entre 3 a 100 caracteres")
	@NotNull(message = "Campo obrigatorio")
	private String nome;
	@NotNull(message = "Campo obrigatorio")
	private String cpf;
	@ManyToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Telefone> telefones;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Email> emails;
	
	
	public Cliente() 
	{
		this.telefones = new ArrayList<>();
		this.emails = new ArrayList<>();
	}
	
}
