package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Classrooms;

public interface ClassroomsRepository extends JpaRepository<Classrooms, Integer>{

}
