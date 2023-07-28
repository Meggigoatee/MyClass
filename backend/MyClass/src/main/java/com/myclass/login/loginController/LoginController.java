package com.myclass.login.loginController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.entity.Users;
import com.myclass.login.loginService.LoginService;

import jakarta.validation.Valid;


//@CrossOrigin(origins = {"http://localhost:3000"})
@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	// 초기화면
	@GetMapping("/frontpage")
	public void frontpage() {
//		return "frontpage";
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
//	@GetMapping("/loginform")
//	public String loginform() {
//		return "로그인 폼 창";
//		
//	}
	
	//로그인 요청
	@PostMapping("/loginreq")
	public String loginreq(Users user, BindingResult result) {
		
		return "login success";
		
	}
	
	// 회원가입 요청
	@PostMapping("/register")
	public Map<String, Object> register(@Valid Users user, BindingResult result) {
		Map<String, Object> data = new HashMap<>();
		System.out.println("email:" + user.getEmail());
		System.out.println("isteacher:" + user.isTeacher());
		if(result.hasErrors()) {
			data.put("email", result.getFieldError("email"));
			data.put("password", result.getFieldError("password"));
			data.put("passwordchk", result.getFieldError("passwordchk"));
			data.put("name", result.getFieldError("name"));
			data.put("nick", result.getFieldError("nick"));
			data.put("isteacher", result.getFieldError("isteacher"));
			System.out.println(data);
	        return data; // 혹은 다른 오류 처리 로직을 수행하고 싶을 경우 해당 처리를 하도록 합니다.
		}
		loginService.register(user);
		return data;
	}
	
//	@PostMapping("/register")
//    public ResponseEntity<?> register(@Valid @RequestBody Users user, BindingResult result) {
//        if (result.hasErrors()) {
//            // BindingResult에 있는 오류 정보를 추출하여 JSON으로 변환하여 클라이언트에게 전달
//            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.BAD_REQUEST);
//        }
//        
//        // 유효성 검사에 통과한 경우 회원가입 로직 수행
//        loginService.register(user);
//        
//        return new ResponseEntity<>("회원가입이 성공적으로 완료되었습니다.", HttpStatus.OK);
//    }
	
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