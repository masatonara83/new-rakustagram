package dev.itboot.rest.Logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dev.itboot.rest.model.UserImage;
import dev.itboot.rest.repository.UserImageMapper;

@Component
public class UserImageLogic {
	
	@Autowired
	private  UserImageMapper userImageMapper;

	public void saveUserImage(UserImage userImage) {
		
		userImageMapper.saveUserImage(userImage);
	}
}
