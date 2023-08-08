package com.myclass.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Classrooms {
	
	// 클래스 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int classId;
	
	@NotBlank(message = "클래스 이름을 입력하세요")
	@Column(unique = true)
	// 클래스 이름
	private String className;
	
	@NotBlank(message = "과목을 입력하세요")
	// 클래스 과목
	private String subject;
	
	// 클래스 설명
	private String discription;
	
//	@OneToMany(mappedBy = "classrooms", cascade = CascadeType.REMOVE)
//	private List<ClassMember> classMembers;

}
