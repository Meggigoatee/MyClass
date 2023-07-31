package com.myclass.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Users {
	
	// 이용자 id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	
	// 이용자 이메일
	@Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "이메일 형식으로 입력해주세요")
	@NotBlank(message = "이메일을 입력해주세요.")
	private String email;
	
	// 이용자 비밀번호
	@NotBlank(message = "비밀번호를 입력해주세요.")
//	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", message = "비밀번호는 영어, 숫자, 특수문자를 하나 이상 넣은 8자리 이상 16 자리 이하 문자입니다.")
	private String password;
	
	// 이용자 이름
	@NotBlank(message = "이름을 입력해주세요.")
	private String name;
	
	// 이용자 닉네임
	@NotBlank(message = "닉네임을 입력해주세요.")
	@Size(min = 3, max = 8, message = "닉네임은 3자리 이상 8자리 이하입니다.")
	private String nick;
	
	// 잠금 계정 여부
	@Column(columnDefinition = "boolean default false")
	private boolean isLocked;
	
	// 정지 계정 여부
	@Column(columnDefinition = "boolean default false")
	private boolean isInvaild;
	
	// 교사 여부
	@NotNull(message = "회원 종류를 선택해주세요.")
	private boolean isTeacher;
	
	// 학교
	private String school;
	
	// 학번
	private String school_num;
	
	// role
	private String role;
	
	// 비밀번호 검사용
	private String passwordchk;


}
