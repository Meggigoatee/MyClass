package com.myclass.classroom.classroomService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.entity.ClassMember;
import com.myclass.entity.Classrooms;
import com.myclass.entity.Problems;
import com.myclass.entity.Users;
import com.myclass.repository.ClassMemberRepository;
import com.myclass.repository.ClassroomsRepository;
import com.myclass.repository.ProblemsRepository;
import com.myclass.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class ClassroomServiceImp implements ClassroomService{
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private ClassroomsRepository classroomsRepository;
	
	@Autowired
	private ClassMemberRepository classMemberRepository;
	
	@Autowired
	private ProblemsRepository problemsRepository;

	@Override
	public List<Classrooms> getClassesByStudentId(int userId) {
//        List<ClassMember> classMembers = classMemberRepository.findByUserId(userId);
//        return classMembers.stream()
//        		.map(ClassMember::getClassrooms)
//        		.collect(Collectors.toList());
        List<Classrooms> classrooms = classroomsRepository.findAll();
        return classrooms;
    }

	@Override
	public Optional<Classrooms> getClassesByClassId(int class_id) {
		
		return classroomsRepository.findById(class_id);
	}

	@Override
	public List<ClassMember> getClassMembersByClassId(int class_id) {
		Classrooms classroom = classroomsRepository.getReferenceById(class_id);
		List<ClassMember> list = classMemberRepository.findByClassrooms(classroom);
		return list;
	}

	@Override
	public Map<String, Object> getClassInfo(int class_id) {
		List<Classrooms> classroom = classroomsRepository.findByClassId(class_id);
		List<ClassMember> memberList = classMemberRepository.findByUserId(class_id);
		List<ClassMember> list = classMemberRepository.findByClassroomsClassIdAndIsTeacher(class_id, 'T');
		int teacherId = list.get(0).getUserId();
		List<Problems> taskList = problemsRepository.findByTeacherId(teacherId);
		List<Problems> problemList = problemsRepository.findByClassId(class_id);
		Map<String, Object> map = new HashMap<>();
		map.put("classData", classroom);
		map.put("memberList", memberList);
		map.put("taskList", taskList);
		map.put("problemList", problemList);
		return map;
	}
	
	@Override
	public void saveClassroom(Classrooms classroom) {
		classroomsRepository.save(classroom);
	}

	@Override
	public void saveClassroom(Classrooms classroom, String email) {
		classroomsRepository.save(classroom);
		Classrooms ccc = classroomsRepository.findByClassName(classroom.getClassName());
		int classId = ccc.getClassId();
		int teacherId = usersRepository.findByEmail(email).getUser_id();
		ClassMember teacher = new ClassMember();
		teacher.setUserId(teacherId);
		teacher.setIsTeacher('T');
		teacher.setClassrooms(ccc);
		classMemberRepository.save(teacher);
	}

	@Transactional
	@Override
	public void deleteClassroom(int classId) {
		classMemberRepository.deleteByClassrooms(classroomsRepository.getReferenceById(classId));
		classroomsRepository.deleteById(classId);
		
	}

	

}
