package com.myclass.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.ClassMember;

public interface ClassMemberRepository extends JpaRepository<ClassMember, Integer>{
	
	
	List<ClassMember> findByTeacherId(int teacherId);
	
//	@EntityGraph(attributePaths = {"Classrooms"})
	List<ClassMember> findByStudentId(int studentId);

}
