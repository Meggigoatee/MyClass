package com.myclass.login.loginController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// 로그인 후 처리
	@GetMapping("/loginsort")
	public String loginsort(Authentication authentication) {
		Users user = (Users) authentication.getPrincipal();
		boolean isTeacher = user.isTeacher();
		if(isTeacher) {
			return "teacher";
		}else {
			return "student";
		}
		
	}
	
	// 회원가입 요청
	@PostMapping("/register")
	public Map<String, Object> register(@Valid Users user, BindingResult result) {
		
		Map<String, Object> data = new HashMap<>();
		if(!user.getPassword().equals(user.getPasswordchk())) {
			result.addError(new FieldError("passwordchk", "passwordchk", "비밀번호 확인이 일치하지 않습니다."));
		}
		if(result.hasErrors()) {
			data.put("email", result.getFieldError("email"));
			data.put("password", result.getFieldError("password"));
			data.put("passwordchk", result.getFieldError("passwordchk"));
			data.put("name", result.getFieldError("name"));
			data.put("nick", result.getFieldError("nick"));
			data.put("isteacher", result.getFieldError("isteacher"));
	        return data;
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		if(loginService.register(user).equals("email_duplicated")) {
			result.addError(new FieldError("email", "email", "중복된 이메일입니다."));
			data.put("email", result.getFieldError("email"));
			return data;
		}else {
			System.out.println(data);
			System.out.println(user.getPassword());
			return data;
		}
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