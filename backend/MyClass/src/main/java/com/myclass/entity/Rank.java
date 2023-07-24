package com.myclass.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Rank {
	
	// 랭크 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rank_id;
	
	// 등급 이름
	private String rank_name;
	
	// 등급 이미지
	private String rank_img;

}
