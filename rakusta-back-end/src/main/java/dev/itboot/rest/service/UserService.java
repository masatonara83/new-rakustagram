package dev.itboot.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.itboot.rest.form.LoginForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.repository.UserMapper;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserMapper mapper;
	
	public User findById(Long userId) {
		return mapper.findById(userId);
	}
	
	public List<User> findAllUsers(){
		return mapper.findAllUsers();
	}
	
	public User insert(User user) {
		mapper.insert(user);
		return mapper.findById(user.getUserId());
	}
	
	public User saveUser(User user) {
		mapper.saveUser(user);
		return findById(user.getUserId());
	}
	
	public User loginAuth(LoginForm form) {
		return mapper.loginAuth(form);
	}
	
}
