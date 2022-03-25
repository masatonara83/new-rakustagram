package dev.itboot.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.model.User;
import dev.itboot.rest.service.FollowService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/v1/follow")
@CrossOrigin("http://localhost:3000")
public class FollowController {

	@Autowired
	private FollowService service;
	
	@Operation(summary = "フォローしていないユーザーを出力します")
	@GetMapping("/not/{id}")
	public ResponseEntity<List<User>> notFollowingUser(@PathVariable Long id){
		return ResponseEntity.ok().body(service.notFollowingUser(id));
	}
}
