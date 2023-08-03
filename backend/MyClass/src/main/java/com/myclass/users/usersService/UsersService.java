package com.myclass.users.usersService;

import org.springframework.stereotype.Service;

@Service
public interface UsersService {

	public int getUserIdbyEmail(String email);
}
