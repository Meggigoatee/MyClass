package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Answers;

public interface AnswersRepository extends JpaRepository<Answers, Integer>{

}
