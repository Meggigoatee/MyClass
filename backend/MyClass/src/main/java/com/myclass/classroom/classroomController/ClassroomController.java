package com.myclass.classroom.classroomController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.classroom.classroomService.ClassroomService;
import com.myclass.entity.Classrooms;
import com.myclass.users.usersService.UsersService;

import jakarta.validation.Valid;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
public class ClassroomController {
	
	@Autowired
	private ClassroomService classroomService;
	
	@Autowired
	private UsersService usersService;
	
	// 내 클래스 선택
	@PostMapping("/myclassroom/{email}")
	public List<Classrooms> myclassroom(@PathVariable("email") String email) {
		System.out.println(email);
		int user_id = usersService.getUserIdbyEmail(email);
		List<Classrooms> myClasses = classroomService.getClassesByStudentId(user_id);
		return myClasses;
		
	}
	
	// 특정 클래스 선택
	@GetMapping("/myclassroom/{class_id}")
	public Map<String, Object> myclassroomspec(@PathVariable("class_id") int class_id) {
		Map<String, Object> map = classroomService.getClassInfo(class_id);
		return map;
	}
	
	// 클래스 만들기
	@PostMapping("/saveclass/{email}")
	public Map<String, Object> saveNewClass(@Valid Classrooms classroom, BindingResult result, @PathVariable("email") String email){
		Map<String, Object> map = new HashMap<>();
		if(result.hasErrors()) {
			map.put("name", result.getFieldError("className"));
			map.put("subject", result.getFieldError("subject"));
			return map;
		}
		classroomService.saveClassroom(classroom, email);
		
		return map;
	}
	
	// 클래스 수정
	@PostMapping("/editclass")
	public Map<String, Object> saveEditClass(@Valid Classrooms classroom, BindingResult result){
		Map<String, Object> map = new HashMap<>();
		if(result.hasErrors()) {
			map.put("name", result.getFieldError("className"));
			map.put("subject", result.getFieldError("subject"));
			return map;
		}
		classroomService.saveClassroom(classroom);
		
		return map;
	}

	// 클래스 삭제
	@PostMapping("/deleteclass/{classId}")
	public void deleteClass(@PathVariable("classId") int classId) {
		classroomService.deleteClassroom(classId);
	}
	
	
	// 클래스 검색
	
	// 클래스 가입
	
	// 클래스 탈퇴
	
	

}
