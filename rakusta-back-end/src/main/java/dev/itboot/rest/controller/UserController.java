package dev.itboot.rest.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.exception.NotFoundException;
import dev.itboot.rest.form.UserForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.service.UserService;
import io.swagger.v3.oas.annotations.Operation;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/user")
public class UserController {
	
	@ModelAttribute
	public UserForm setUserForm() {
		return new UserForm();
	}

	@Autowired
	private UserService service;
	
	@Operation(summary = "ユーザー情報を全件取得します")
	@GetMapping("")
	public List<User> findAllUsers(){
		return service.findAllUsers();
	}
	
	@Operation(summary = "ユーザー情報を一件登録します")
	@PostMapping("")
	public User insertUser(@RequestBody UserForm form) {
		User user = new User();
		BeanUtils.copyProperties(form, user);
		return service.insert(user);
	}
	
	@Operation(summary = "ユーザー情報を１件取得します")
	@GetMapping("/{userId}")
	public User findById(@PathVariable Long userId) {
		return service.findById(userId);
	}
	
	@Operation(summary = "ユーザー情報を更新します")
	@PutMapping("/{userId}")
	public User saveUser(@RequestBody User userDetail, @PathVariable Long userId) {
		User user =  service.findById(userId);
		if(user == null) {
			throw new NotFoundException("存在しないid" + userId);
		}
		BeanUtils.copyProperties(userDetail, user);
		user.setUserId(userId);
		return service.saveUser(user);
	}
	
	
}
