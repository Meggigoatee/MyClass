package com.myclass.problem.problemService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myclass.entity.Prob;

@Service
public interface ProblemService {
	
	public void saveProblem(List<Prob> probs, String email, String problemName);

}
