package com.myclass.login.loginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.entity.Users;
import com.myclass.repository.UsersRepository;

@Service
public class LoginServiceImp implements LoginService{
	
	@Autowired
	private UsersRepository usersRepository;

	// 회원가입 요청
	@Override
	public String register(Users user) {
		if(usersRepository.findByEmail(user.getEmail()) != null) {
			return "email_duplicated";
		}
		usersRepository.save(user);
		return "ok";
	}

	@Override
	public char isTeacher(String email) {
		
		return usersRepository.findByEmail(email).getIsTeacher();
	}

}
