package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Question {
	
	// 질문 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int question_id;
	
	// 클래스 id
	private int class_id;
	
	// 교사 id
	private int t_id;
	
	// 학생 id
	private int s_id;
	
	// 제목
	private String question_title;
	
	// 내용
	private String question_content;
	
	// 첨부 파일
	private String question_add;
	
	// 답변
	private String question_reply;
	
	// 답변 첨부파일
	private String question_reply_add;

}
