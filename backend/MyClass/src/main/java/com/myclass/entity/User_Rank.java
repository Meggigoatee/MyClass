package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User_Rank {
	
	// 학생등급 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_rank_id;
	
	// 클래스 id
	private int class_id;
	
	// 학생 id
	private int s_id;
	
	// 등급 id
	private int rank_id;
	

}
