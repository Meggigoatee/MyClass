package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class ClassMember {
	
	// 고유 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int classMemberId;
	
	@ManyToOne
    @JoinColumn(name = "classId")
    private Classrooms classrooms;
	
	// 이용자 id
	private int userId;
	
	// 교사 여부
	private char isTeacher;
		
}
