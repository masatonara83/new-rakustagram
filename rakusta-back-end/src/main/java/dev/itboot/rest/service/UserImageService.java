package dev.itboot.rest.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import dev.itboot.rest.Logic.UserImageLogic;
import dev.itboot.rest.Logic.UserLogic;
import dev.itboot.rest.model.User;
import dev.itboot.rest.model.UserImage;
import dev.itboot.rest.utility.ConversionUtil;

@Service
@Transactional
public class UserImageService {
	
	@Autowired
	private UserImageLogic userImageLogic;
	
	@Autowired
	private UserLogic userLogic;

	
	public User saveUserImage(MultipartFile image, Long userId) throws IOException {
		String imagePath = ConversionUtil.imageConversion(image);
	
		
		UserImage userImage = new UserImage();
		userImage.setUserId(userId);
		userImage.setImagePath(imagePath);
		
		userImageLogic.saveUserImage(userImage);
		return userLogic.findByUser(userId);
	}
}
