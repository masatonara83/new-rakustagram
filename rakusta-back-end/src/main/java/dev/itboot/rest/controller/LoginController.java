package dev.itboot.rest.controller;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.form.LoginForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.service.UserService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/login")
public class LoginController {

	@Autowired
	private UserService service;

	
	@Operation(summary = "ログイン認証を行います")
	@PostMapping("")
	public ResponseEntity<User> LoginAuth(HttpServletResponse response, @RequestBody LoginForm loginForm) {
		System.out.println(loginForm);
		User user = service.loginAuth(loginForm);
		Cookie cookie = new Cookie("userId", user.getUserId().toString());
		response.addCookie(cookie);
		return ResponseEntity.ok().body(user);
	}
	
	@Operation(summary = "cookieを取得")
	@GetMapping("/cookie")
	public String getCookie(@CookieValue(name="key", required=false, defaultValue = "none") String cookie) {
		System.out.println(cookie);
		return cookie;
	}
	
	
}
