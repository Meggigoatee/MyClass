package com.myclass.problem.problemController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.entity.Prob;
import com.myclass.entity.Problems;

@RestController
public class ProblemController {
	
	// 주의! 문제지의 데이터는 문제의 List<VO> 컬랙션과 문제지 VO 두개가 들어온다.
	
	// 문제지 생성
	@PostMapping("/problem/save")
	public String saveProblem(@RequestBody List<Prob> probs, @RequestBody Problems problem) {
		return null;
	}
	
	// 문제지 수정
	
	// 문제지 삭제
	@PostMapping("/problem/delete")
	public String deleteProblem(@RequestBody Integer problem_id) {
		return null;
	}
	
	// 문제 생성
	
	// 문제 수정
	
	// 문제 삭제
	
	// 문제지 개시
	
	// 문제지 풀기
	@GetMapping("/classroom/{class_id}/recieve_problem/{problem_id}")
	public String recieveProblem(@PathVariable Integer class_id, @PathVariable Integer problem_id) {
		return null;
	}
	
	// 문제지 제출
	@PostMapping("/classroom/{class_id}/assign_problem/{problem_id}")
	public String assignProblem(@PathVariable Integer class_id, @PathVariable Integer problem_id) {
		return null;
	}
	
	// 체점

}
