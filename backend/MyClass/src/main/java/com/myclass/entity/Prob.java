package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Prob {

	// 문제 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int prob_id;
	
	// 문제지 id
	private int problem_id;
	
	// 문제 설명
	private String prob_exp;
	
	// 문제 본문
	private String prob_main;
	
	// 객관식 여부
	private boolean isMultiple;
	
	// 보기 1
	private String cho_1;

	// 보기 2
	private String cho_2;

	// 보기 3
	private String cho_3;

	// 보기 4
	private String cho_4;

	// 보기 5
	private String cho_5;
	
	// 정담
	private String correct;
	
}
