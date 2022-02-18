package dev.itboot.rest.repository;

import org.apache.ibatis.annotations.Mapper;

import dev.itboot.rest.model.UserImage;

@Mapper
public interface UserImageMapper {
	
	public void insertUserImage(UserImage userImage);

	public void saveUserImage(UserImage userImage);
}
