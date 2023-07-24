package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Records;

public interface RecordsRepository extends JpaRepository<Records, Integer>{

}
