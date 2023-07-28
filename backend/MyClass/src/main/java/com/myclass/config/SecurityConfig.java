package com.myclass.config;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private CorsConfig corsConfig;
	
	@Autowired
	private UserDetailSub userDetailSub;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		// 패스워드 입력시 암호화되서 입력됨
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain filterchain(HttpSecurity http) throws Exception {
		http.csrf().disable();
//		http.csrf().csrfTokenRepository(csrfTokenRepository());
        http.addFilter(corsConfig.corsFilter()); // Add the CORS filter before the CsrfFilter
		http.authorizeHttpRequests((requests) -> requests
			.requestMatchers("/", "/home", "/login", "/register").permitAll()
			.anyRequest().authenticated()
//			.anyRequest().permitAll()
		);
//		.formLogin((form) -> form
//			.loginPage("/loginform")
//			.defaultSuccessUrl("/loginreq")
//			.permitAll()
//		);
//		.logout((logout) -> logout.permitAll()
//			.logoutSuccessUrl("/"));
//			);
		http.userDetailsService(userDetailSub);

	return http.build();
		
		
	}
	
	@Bean
    public CsrfTokenRepository csrfTokenRepository() {
        CookieCsrfTokenRepository repository = CookieCsrfTokenRepository.withHttpOnlyFalse();
        // Customize the CSRF token cookie if needed
        // repository.setCookieName("XSRF-TOKEN");
        return repository;
    }
	
}
