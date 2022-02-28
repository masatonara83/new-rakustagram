package dev.itboot.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.form.SignUpForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.service.UserService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/v1/register")
@CrossOrigin("http://localhost:3000")
public class RegisterController {

	@Autowired
	private UserService userService;
	
	@ModelAttribute
	public SignUpForm setSignUpForm() {
		return new SignUpForm();
	}
	
	@Operation(summary = "ユーザーを登録します")
	@PostMapping("")
	public User register(@RequestBody SignUpForm form) {
		
		return userService.insert(form);
	}
}
