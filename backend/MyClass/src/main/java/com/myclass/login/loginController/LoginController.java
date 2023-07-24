package com.myclass.login.loginController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.entity.Users;
import com.myclass.login.loginService.LoginService;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	// 초기화면
	@GetMapping("/frontpage")
	public String frontpage() {
		return "front page";
	}
	
	// 회원가입 선택
	@GetMapping("/joinselect")
	public String joinselect() {
		return "joinselect";
	}
	
	// 회원가입 폼
	@GetMapping("/joinform")
	public String joinform() {
		return null;
	}
	
	// 로그인 폼
	@GetMapping("/loginform")
	public String loginform() {
		return "로그인 폼 창";
		
	}
	
	//로그인 요청
	@PostMapping("/loginreq")
	public String loginreq(Users user) {
		
		return "login success";
		
	}
	
	// 회원가입 요청
	@PostMapping("register")
	public String register(Users user, BindingResult result) {
		loginService.register(user);
		if(result.hasErrors()) {
			return "";
		}
		return "/";
	}
	
	// 회원가입 수정
	@PostMapping("/users/update")
	public String userupdate() {
		return null;
	}
	
	// 회원 탈퇴
	@PostMapping("/users/withdraw")
	public String userwithdraw() {
		return null;
	}
	

}