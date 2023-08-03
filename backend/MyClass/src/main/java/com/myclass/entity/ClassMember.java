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
	private int class_member_id;
	
	@ManyToOne
    @JoinColumn(name = "class_id")
    private Classrooms classrooms;
	
	// 클래스 id
	// private int class_id;
	
	// 교사 id
	private int teacherId;
	
	// 학생 id
	private int studentId;
		
}
