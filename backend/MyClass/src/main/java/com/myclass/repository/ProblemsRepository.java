package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Problems;

public interface ProblemsRepository extends JpaRepository<Problems, Integer>{

}
