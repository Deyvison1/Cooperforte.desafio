package com.desafio.desafio.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CreateId {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long id;

}
