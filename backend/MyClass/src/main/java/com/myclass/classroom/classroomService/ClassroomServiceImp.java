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
import com.myclass.repository.ClassMemberRepository;
import com.myclass.repository.ClassroomsRepository;
import com.myclass.repository.ProblemsRepository;

@Service
public class ClassroomServiceImp implements ClassroomService{
	
	@Autowired
	private ClassroomsRepository classroomsRepository;
	
	@Autowired
	private ClassMemberRepository classMemberRepository;
	
	@Autowired
	private ProblemsRepository problemsRepository;

	@Override
	public List<Classrooms> getClassesByStudentId(int userId) {
        List<ClassMember> classMembers = classMemberRepository.findByUserId(userId);
        return classMembers.stream()
                           .map(ClassMember::getClassrooms)
                           .collect(Collectors.toList());
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
		Classrooms classroom = classroomsRepository.getReferenceById(class_id);
		List<ClassMember> memberList = classMemberRepository.findByClassrooms(classroom);
		List<Problems> problemList = problemsRepository.findByClassId(class_id);
		Map<String, Object> map = new HashMap<>();
		map.put("classroom", classroom);
		map.put("memberList", memberList);
		map.put("problemList", problemList);
		return map;
	}

	@Override
	public int saveClassroom(Classrooms classroom) {
		classroomsRepository.save(classroom);
		return 0;
	}
	
	


}
