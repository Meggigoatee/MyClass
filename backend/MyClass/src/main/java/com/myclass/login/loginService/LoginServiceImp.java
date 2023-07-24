package com.myclass.login.loginService;

import org.springframework.beans.factory.annotation.Autowired;

import com.myclass.entity.Users;
import com.myclass.repository.UsersRepository;

public class LoginServiceImp implements LoginService{
	
	@Autowired
	private UsersRepository usersRepository;

	// 로그인 요청
//	@Override
//	public void loginreq(Users user) {
//		usersRepository.save(user);
//		
//	}

	// 회원가입 요청
	@Override
	public void register(Users user) {
		usersRepository.save(user);
		
	}

}
