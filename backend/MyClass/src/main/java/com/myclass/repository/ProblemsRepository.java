package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Problems;
import java.util.List;


public interface ProblemsRepository extends JpaRepository<Problems, Integer>{
	
	List<Problems> findByClassId(int classId);

}
