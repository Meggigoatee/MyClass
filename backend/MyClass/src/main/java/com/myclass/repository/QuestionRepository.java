package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
