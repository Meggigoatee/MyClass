package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer>{

}
