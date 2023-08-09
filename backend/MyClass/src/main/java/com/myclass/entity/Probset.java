package com.myclass.entity;

import java.util.List;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Probset {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String problemName;
	
	private List<Prob> probList;

}
