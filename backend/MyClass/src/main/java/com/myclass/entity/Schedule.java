package com.myclass.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Schedule {
	
	// 스케줄 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int schedule_id;
	
	// 클래스 id
	private int class_id;
	
	// 일정 이름
	private String schedule_name;
	
	// 일정 내용
	private String schedule_content;
	
	// 일정 시작 날짜
	private Date schedule_begin;
	
	// 일정 종료 날짜
	private Date schedule_end;

}
