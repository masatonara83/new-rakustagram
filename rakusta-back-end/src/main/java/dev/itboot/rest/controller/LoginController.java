package dev.itboot.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	public User LoginAuth(@ModelAttribute LoginForm form) {
		System.out.println(form);
		return service.loginAuth(form);
	}
	
	
}
