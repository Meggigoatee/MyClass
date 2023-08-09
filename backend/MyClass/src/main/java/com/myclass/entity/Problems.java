package com.myclass.entity;

import java.util.Map;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
//@TypeDef(name = "json", typeClass = JsonStringType.class)
public class Problems {
	
	// 믄제지 아이디
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int problemId;
	
	// 문제지 이름
	private String problemName;
	
	// 교사 아이디
	private int teacherId;
		
	// 문제 리스트
	@Convert(converter = JsonConverter.class)
    private Map<String, Object> problemList;
	
	// 클래스 id
	private int classId;
	// 추후 별도 task 테이블 생성 후 관리할 것
	
	// 교부 날짜
//	private Date distribution;
//	
//	// 마감 날짜
//	private Date endDate;
//	
//	// 즉시 체점 여부
//	private boolean isScoring;

}
