package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Prob;
import java.util.List;


public interface ProbRepository extends JpaRepository<Prob, Integer>{
	
	void deleteAllByProblemId(int problemId);
	
	List<Prob> findByProblemId(int problemId);

}
