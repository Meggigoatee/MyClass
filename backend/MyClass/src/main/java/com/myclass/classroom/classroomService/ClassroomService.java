package com.myclass.classroom.classroomService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.myclass.entity.ClassMember;
import com.myclass.entity.Classrooms;

@Service
public interface ClassroomService {
	
	public List<Classrooms> getClassesByStudentId(int studentId);
	
	public Optional<Classrooms> getClassesByClassId(int class_id);
	
	public List<ClassMember> getClassMembersByClassId(int class_id);
	
	public Map<String, Object> getClassInfo(int class_id);
	
	public void saveClassroom(Classrooms classroom);
	
	public void saveClassroom(Classrooms classroom, String email);
	
	public void deleteClassroom(int classId);

}
