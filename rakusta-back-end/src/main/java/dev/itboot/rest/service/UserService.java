package dev.itboot.rest.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.itboot.rest.exception.NotFoundException;
import dev.itboot.rest.form.LoginForm;
import dev.itboot.rest.form.SignUpForm;
import dev.itboot.rest.model.Password;
import dev.itboot.rest.model.User;
import dev.itboot.rest.repository.PasswordMapper;
import dev.itboot.rest.repository.UserMapper;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserMapper mapper;
	
	@Autowired
	private PasswordMapper passwordMapper;
	
	
	public User findById(Long userId) {
		User user = mapper.findById(userId);
		User count = countCheck(userId);
		user.setArticleCount(count.getArticleCount());
		user.setFollowerCount(count.getFollowerCount());
		user.setFollowingCount(count.getFollowingCount());
		return user;
	}
	
	public List<User> findAllUsers(){
		return mapper.findAllUsers();
	}
	
	/**
	 * 新規ユーザー登録を行う
	 * @param form
	 * @return
	 */
	public User insert(SignUpForm form) {
		User user = new User();
		BeanUtils.copyProperties(form, user);
		mapper.insert(user);
		
		Password password = new Password();
		password.setUserId(user.getUserId());
		password.setPassword(form.getPassword());
		passwordMapper.insertPassword(password);
		
		
		return mapper.findByUserIdAndPassword(user.getUserId(), password.getPassword());
	}
	
	public User saveUser(User putUser) {
		User user =  findById(putUser.getUserId());
		if(user == null) {
			throw new NotFoundException("存在しないIDです");
		}
		mapper.saveUser(putUser);
		return findById(putUser.getUserId());
	}
	
	public User loginAuth(LoginForm form) {
		return mapper.loginAuth(form);
	}
	
	public User countCheck(Long userId) {
		return mapper.countCheck(userId);
	}
	
}
