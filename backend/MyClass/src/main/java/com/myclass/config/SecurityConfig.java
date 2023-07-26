package com.myclass.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		// 패스워드 입력시 암호화되서 입력됨
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain filterchain(HttpSecurity http) throws Exception {
		http
		.authorizeHttpRequests((requests) -> requests
			.requestMatchers("/", "/home", "/login").permitAll()
			.anyRequest().authenticated()
//			.anyRequest().permitAll()
		)
		.formLogin((form) -> form
			.loginPage("/loginform")
			.defaultSuccessUrl("/loginreq")
			.permitAll()
		);
//		.logout((logout) -> logout.permitAll()
//			.logoutSuccessUrl("/"));
//			);

	return http.build();
		
		
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails user =
			 User.withDefaultPasswordEncoder()
				.username("user")
				.password("password")
				.roles("USER")
				.build();

		return new InMemoryUserDetailsManager(user);
	}
}
