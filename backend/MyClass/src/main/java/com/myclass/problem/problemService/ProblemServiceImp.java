package com.myclass.problem.problemService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.entity.Prob;
import com.myclass.entity.Problems;
import com.myclass.entity.Users;
import com.myclass.repository.ProbRepository;
import com.myclass.repository.ProblemsRepository;
import com.myclass.repository.UsersRepository;

@Service
public class ProblemServiceImp implements ProblemService{
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private ProbRepository probRepository;
	
	@Autowired
	private ProblemsRepository problemsRepository;

	@Override
	public void saveProblem(List<Prob> probs, String email, String problemName) {
		int teacherId = usersRepository.findByEmail(email).getUser_id();
		Problems problem = new Problems();
		problem.setTeacherId(teacherId);
		problem.setProblemName(problemName);
		problem = problemsRepository.save(problem);
	    int problemId = problem.getProblemId();
	    for (Prob prob : probs) {
	        prob.setProblemId(problemId);
	    }
		probRepository.saveAll(probs);
		
	}

	@Override
	public List<Problems> getProblemsList(String email) {
		int teacherId = usersRepository.findByEmail(email).getUser_id();
		return problemsRepository.findByTeacherId(teacherId);
	}

	@Override
	public void deleteProblem(int id) {
		problemsRepository.deleteById(id);
		probRepository.deleteAllByProblemId(id);
		
	}

	@Override
	public void addtask(int problemId, int roomNum) {
		Optional<Problems> problem = problemsRepository.findById(problemId);
		if (problem.isPresent()) {
		    Problems actualProblem = problem.get();
		    actualProblem.setClassId(roomNum);
		    problemsRepository.save(actualProblem);
		}
		
	}

	@Override
	public Map<String, Object> getProblem(int problemId) {
		Map<String, Object> map = new HashMap<>();
		List<Problems> problem = problemsRepository.findByProblemId(problemId);
		List<Prob> prob = probRepository.findByProblemId(problemId);
		map.put("problem", problem);
		map.put("prob", prob);
		
		return map;
	}

}
