package com.myclass.entity;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import lombok.Data;

@Data
public class CustomUser extends User{
	
	private Users users;

	public CustomUser(Users users) {
		super(users.getUsername(), users.getPassword(), AuthorityUtils.createAuthorityList("Role_USER"));
		this.users = users;
	}

}
