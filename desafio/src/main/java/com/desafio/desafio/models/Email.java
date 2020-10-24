package com.desafio.desafio.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Table(name = "emails")
@Entity
public class Email extends CreateId {
	
	@NotNull(message = "Campo obrigatorio")
	private String email;
	
}
