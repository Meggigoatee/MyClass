package com.myclass.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Answers {
	
	// 답안지 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int answer_id;
	
	// 문제지 id
	private int problem_id;
	
	// 학생 id
	private int s_id;
	
	// 답안 리스트
	@Column(columnDefinition = "text")
	private String answer_list;
	
	// 제출 날짜
	private Date submit_date;
	
	// 점수
	private int score;

}
