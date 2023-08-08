package com.myclass.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.ClassMember;
import com.myclass.entity.Classrooms;

public interface ClassMemberRepository extends JpaRepository<ClassMember, Integer>{
	
	
	List<ClassMember> findByUserId(int userId);
	
	List<ClassMember> findByClassrooms(Classrooms classrooms);
	
	void deleteByClassrooms(Classrooms classrooms);

}
