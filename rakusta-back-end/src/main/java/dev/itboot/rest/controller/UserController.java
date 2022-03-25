package dev.itboot.rest.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import dev.itboot.rest.form.PasswordForm;
import dev.itboot.rest.form.SignUpForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.service.UserImageService;
import dev.itboot.rest.service.UserPasswordService;
import dev.itboot.rest.service.UserService;
import io.swagger.v3.oas.annotations.Operation;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/user")
public class UserController {
	
	@ModelAttribute
	public SignUpForm setUserForm() {
		return new SignUpForm();
	}
	
	@Autowired
	private UserService service;
	
	@Autowired
	private UserImageService userImageService;
	
	@Autowired
	private UserPasswordService passwordService;
	
	@Operation(summary = "ユーザー情報を全件取得します")
	@GetMapping("")
	public List<User> findAllUsers(){
		return service.findAllUsers();
	}
	
	@Operation(summary = "ユーザー情報を一件登録します")
	@PostMapping("")
	public User insertUser(@RequestBody SignUpForm form) {
		return service.insert(form);
	}
	
	@Operation(summary = "ユーザー情報を１件取得します")
	@GetMapping("/{userId}")
	public User findById(@PathVariable Long userId) {
		User user = service.findById(userId);
		return user;
	}
	
	@Operation(summary = "ユーザー情報を更新します")
	@PutMapping("/profile/{userId}")
	public User saveUser(@RequestBody User user, @PathVariable Long userId) {
		return service.saveUser(user);
	}
	
	@Operation(summary = "ユーザーのプロフィール画像を更新します")
	@PutMapping("/image")
	public User saveImage(@RequestPart("image") MultipartFile image, @RequestPart("userId") Long userId) throws IOException{
		return userImageService.saveUserImage(image, userId);
	}
	
	@Operation(summary = "パスワードを変更します")
	@PutMapping("/password")
	public User savepassword(@RequestBody PasswordForm form) {
		
		return passwordService.findByUserIdAndPassword(form);
	}
	
	@Operation(summary = "ユーザーの投稿数、フォロワー数、フォロー中数を取得します")
	@PostMapping("/count")
	public User countCheck(@RequestBody Long id) {
		return service.countCheck(id);
	}
}
