package com.myclass.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entity.Rank;

public interface RankRepository extends JpaRepository<Rank, Integer>{

}
