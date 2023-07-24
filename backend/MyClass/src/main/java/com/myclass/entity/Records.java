package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data

public class Records {
	
	// 기록 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int record_id;
	
	// 클래스 id
	private int class_id;
	
	// 학생 id
	private int s_id;

}
