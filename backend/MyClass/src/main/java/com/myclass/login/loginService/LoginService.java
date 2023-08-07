package com.myclass.login.loginService;

import org.springframework.stereotype.Service;

import com.myclass.entity.Users;

@Service
public interface LoginService {
	
	// 로그인 요청
//	public void loginreq(Users user);
	
	// 회원가입 요청
	public String register(Users user);
	
	// isTeacher 반환
	public char isTeacher(String email);
	

}
