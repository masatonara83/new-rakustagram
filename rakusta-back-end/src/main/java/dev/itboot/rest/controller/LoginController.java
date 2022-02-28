package dev.itboot.rest.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseCookie.ResponseCookieBuilder;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
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
	@GetMapping("")
	public User LoginAuth(@ModelAttribute LoginForm form, HttpServletResponse response) {
		User user = service.loginAuth(form);
		
		return user;
	}
	
	@Operation(summary = "cookieを取得")
	@GetMapping("/cookie")
	public String getCookie(@CookieValue(name="key", required=false, defaultValue = "none") String cookie) {
		System.out.println(cookie);
		return cookie;
	}
	
	
}
