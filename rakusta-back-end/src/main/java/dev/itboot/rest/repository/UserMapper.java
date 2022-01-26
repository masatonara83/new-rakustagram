package dev.itboot.rest.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dev.itboot.rest.model.User;

@Mapper
public interface UserMapper {

	
	public User findById(@Param("userId") Long userId);
	
	
	public List<User> findAllUsers();
	
	public Integer insert(User user);
	
	public List<User> notFollowingUsers(
			@Param("followingUserIdList") List<Long> followingUserIdList, 
			@Param("userId") Long userId);
}
