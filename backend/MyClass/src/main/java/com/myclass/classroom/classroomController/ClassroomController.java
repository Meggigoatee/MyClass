package com.myclass.classroom.classroomController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClassroomController {
	
	// 내 클래스 선택(로그인시 기본)
	@GetMapping("/myclassroom")
	public String myclassroom() {
		return null;
		
	}
	
	// 특정 클래스 선택
	@GetMapping("/myclassroom/{class_id}")
	public String myclassroomspec(@PathVariable("class_id") String class_id) {
		return null;
	}
	
	// 클래스 검색
	
	// 클래스 가입
	
	// 클래스 탈퇴
	
	

}
