package com.myclass.classroom.classroomService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.entity.ClassMember;
import com.myclass.entity.Classrooms;
import com.myclass.repository.ClassMemberRepository;
import com.myclass.repository.ClassroomsRepository;

@Service
public class ClassroomServiceImp implements ClassroomService{
	
	@Autowired
	private ClassroomsRepository classroomsRepository;
	
	@Autowired
	private ClassMemberRepository classMemberRepository;

//	@Override
//	public List<Classrooms> getClassList(int student_id) {
//		
//		List<ClassMember> stu_list = classMemberRepository.findByStudent_id(student_id);
//		List<Integer> class_id_list = stu_list.
//		return null;
//	}

	@Override
	public List<Classrooms> getClassesByStudentId(int studentId) {
        List<ClassMember> classMembers = classMemberRepository.findByStudentId(studentId);
        return classMembers.stream()
                           .map(ClassMember::getClassrooms)
                           .collect(Collectors.toList());
    }
//	@Override
//	public List<class> getClasses(int User_id) {
//		
//		
//	}


}
