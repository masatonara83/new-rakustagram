package dev.itboot.rest.Logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dev.itboot.rest.model.User;
import dev.itboot.rest.repository.UserMapper;

@Component
public class UserLogic {
	
	@Autowired
	private UserMapper userMapper;
	
	public User findByUser(Long userId) {
		return userMapper.findByUser(userId);
	}
	
	public User findByUserIdAndPassword(Long userId, String password) {
		return userMapper.findByUserIdAndPassword(userId, password);
	}

}
