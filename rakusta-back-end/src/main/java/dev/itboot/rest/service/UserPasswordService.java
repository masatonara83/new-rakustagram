package dev.itboot.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.itboot.rest.Logic.UserLogic;
import dev.itboot.rest.exception.NotFoundException;
import dev.itboot.rest.form.PasswordForm;
import dev.itboot.rest.model.User;
import dev.itboot.rest.repository.PasswordMapper;

@Service
@Transactional
public class UserPasswordService {

	@Autowired
	private UserLogic userLogic;
	
	@Autowired 
	private PasswordMapper passwordMapper;
	
	
	public User findByUserIdAndPassword(PasswordForm form) {
		User user = userLogic.findByUserIdAndPassword(form.getUserId(), form.getPassword());
		if(user == null) {
			throw new NotFoundException("存在しないユーザーです");
		}
		passwordMapper.savePassword(form.getPassword(),form.getNewPassword());
		return userLogic.findByUserIdAndPassword(user.getUserId(), form.getNewPassword());
	}
}
