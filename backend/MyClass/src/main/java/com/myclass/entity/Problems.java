package com.myclass.entity;

import java.util.Date;

import org.springframework.boot.configurationprocessor.json.JSONObject;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Problems {
	
	// 믄제지 아이디
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int problem_id;
	
	// 문제지 이름
	private String problem_name;
	
	// 교사 아이디
	private int t_id;
	
	// 문제 리스트
	private JSONObject problem_list;
	
	// 교부 날짜
	private Date distribution;
	
	// 마감 날짜
	private Date end_date;
	
	// 즉시 체점 여부
	private boolean isScoring;

}
