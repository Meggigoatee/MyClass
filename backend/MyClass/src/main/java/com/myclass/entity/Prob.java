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
	private int probId;
	
	// 문제지 id
	private int problemId;
	
	// 문제 제목
	private String probTitle;
	
	// 문제 설명
	private String probExp;
	
	// 객관식 여부
	private String type;
	
	// 보기 1
	private String cho1;

	// 보기 2
	private String cho2;

	// 보기 3
	private String cho3;

	// 보기 4
	private String cho4;

	// 보기 5
	private String cho5;
	
	// 객관식 정답
	private int mmm;
	
	// 주관식 정담
	private String sss;
		
}
