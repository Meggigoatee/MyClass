package com.myclass.problem.problemService;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.myclass.entity.Prob;
import com.myclass.entity.Problems;

@Service
public interface ProblemService {
	
	public List<Problems> getProblemsList(String email);
	
	public void saveProblem(List<Prob> probs, String email, String problemName);
	
	public void deleteProblem(int id);
	
	public void addtask(int problemId, int roomNum);
	
	public Map<String, Object> getProblem(int problemId);

}
