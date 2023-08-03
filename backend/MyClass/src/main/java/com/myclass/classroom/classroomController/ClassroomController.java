package com.myclass.classroom.classroomController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.classroom.classroomService.ClassroomService;
import com.myclass.entity.Classrooms;
import com.myclass.users.usersService.UsersService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
public class ClassroomController {
	
	@Autowired
	private ClassroomService classroomService;
	
	@Autowired
	private UsersService usersService;
	
	// 내 클래스 선택
	@PostMapping("/myclassroom/{email}")
	public Map<String, Object> myclassroom(@PathVariable("email") String email) {
		System.out.println(email);
		int user_id = usersService.getUserIdbyEmail(email);
		List<Classrooms> myClasses = classroomService.getClassesByStudentId(user_id);
		Map<String, Object> map = myClasses.stream()
			    .collect(Collectors.toMap(Classrooms::getClass_name, classroom -> classroom));
		
		
		return map;
		
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
