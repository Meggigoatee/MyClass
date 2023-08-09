package com.myclass.problem.problemService;

import java.util.List;
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
		probRepository.saveAll(probs);
		
		problemsRepository.save(problem);
//		probs.forEach(new Consumer<Prob>() {
//
//			@Override
//			public void accept(Prob t) {
//				probRepository.sa
//				
//			}
//		});
	}

}
