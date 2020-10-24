package com.desafio.desafio.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.desafio.desafio.enums.EnumTipoTelefone;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "telefones")
public class Telefone extends CreateId {

	@NotNull(message = "Campo obrigatorio")
	@Min(value = 2, message = "Minimo de numeros sao 2")
	@Max(value = 3, message= "Maximo de numero sao 3")
	private int ddd;
	@NotNull(message = "Campo obrigatorio")
	private String numero;
	private EnumTipoTelefone tipo;
	
}
