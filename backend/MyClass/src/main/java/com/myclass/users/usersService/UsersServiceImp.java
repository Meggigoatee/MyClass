package com.myclass.users.usersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.entity.Users;
import com.myclass.repository.UsersRepository;

@Service
public class UsersServiceImp implements UsersService{
	
	@Autowired
	private UsersRepository usersRepository;

	@Override
	public int getUserIdbyEmail(String email) {
		Users user = usersRepository.findByEmail(email);
		return user.getUser_id();
				
	}

}
