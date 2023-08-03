package com.myclass.classroom.classroomService;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myclass.entity.Classrooms;

@Service
public interface ClassroomService {
	
//	public Classrooms getClasses(int User_id);
//	public List<Classrooms> getClassList(int user_id);
	
	public List<Classrooms> getClassesByStudentId(int studentId);

}
