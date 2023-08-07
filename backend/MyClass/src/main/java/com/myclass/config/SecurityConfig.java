package com.myclass.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

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
        http.addFilter(corsConfig.corsFilter());
		http.authorizeHttpRequests((requests) -> requests
			.requestMatchers("/", "/loginform", "/test", "/loginreq", "/register", "/loginsort").permitAll()
			.anyRequest().
			permitAll()
//			authenticated()
		)
		.formLogin((form) -> form
//			.loginPage("/loginform")
			.usernameParameter("email")
            .passwordParameter("password")
//			.defaultSuccessUrl("/loginsort")
            .successHandler(new AuthenticationSuccessHandler() {
				
				@Override
				public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
						Authentication authentication) throws IOException, ServletException {
					// 쿠키를 생성합니다.
			        Cookie cookie = new Cookie("JSESSIONID", request.getSession().getId());
			        cookie.setMaxAge(60 * 60);  // 쿠키의 유효시간을 1시간으로 설정합니다.
			        cookie.setSecure(false);  // HTTPS를 이용하여 쿠키를 전송하도록 설정합니다.
			        cookie.setHttpOnly(false);  // JavaScript를 이용한 쿠키 접근을 방지합니다.
			        cookie.setPath("/");  // 쿠키가 사용되는 경로를 설정합니다.
			     // SameSite 설정 추가
			        String cookieHeader = String.format("%s; %s", cookie.toString(), "SameSite=none");

			        response.addHeader("Set-Cookie", cookieHeader);

			        // 쿠키를 HTTP 응답에 담아서 보냅니다.
			        response.addCookie(cookie);
				}
			})
            .failureHandler(new AuthenticationFailureHandler() {
				
				@Override
				public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
						AuthenticationException exception) throws IOException, ServletException {
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			        response.setContentType("application/json;charset=UTF-8");
			        response.getWriter().write("{\"message\": \"login_fail\"}");
				}
			})
		)
		.logout((logout) -> logout.logoutSuccessHandler(new LogoutSuccessHandler() {
			
			@Override
			public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
					throws IOException, ServletException {
				// 쿠키의 max-age를 0으로 설정하여 쿠키를 삭제합니다.
				Cookie cookie = new Cookie("JSESSIONID", request.getSession().getId());
				cookie.setMaxAge(0);
				cookie.setSecure(false);  // HTTPS를 이용하여 쿠키를 전송하도록 설정합니다.
				cookie.setHttpOnly(false);  // JavaScript를 이용한 쿠키 접근을 방지합니다.
				cookie.setPath("/");  // 쿠키가 사용되는 경로를 설정합니다.
				response.addCookie(cookie);
			}
		})
		  .permitAll());
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
