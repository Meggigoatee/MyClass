package com.myclass.entity;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CustomUser extends User{
	
	private Users users;

	public CustomUser(Users users) {
		super(users.getName(), users.getPassword(), AuthorityUtils.createAuthorityList("Role_USER"));
		this.users = users;
	}

}
