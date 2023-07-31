package com.myclass.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.myclass.entity.CustomUser;
import com.myclass.entity.Users;
import com.myclass.repository.UsersRepository;

@Service
public class UserDetailSub implements UserDetailsService{
	
	@Autowired
	private UsersRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = usersRepository.findByEmail(username);
		if(user==null) {
			// 없으면 예외 처리
			throw new UsernameNotFoundException(username + "존재하지 않음");
		}
		
		return new CustomUser(user);
	}
            
}
