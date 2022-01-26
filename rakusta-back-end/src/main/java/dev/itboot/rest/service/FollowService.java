package dev.itboot.rest.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.itboot.rest.model.Follow;
import dev.itboot.rest.model.User;
import dev.itboot.rest.repository.FollowMapper;
import dev.itboot.rest.repository.UserMapper;

@Service
@Transactional
public class FollowService {

	@Autowired
	private FollowMapper mapper;
	
	@Autowired
	private UserMapper userMapper;
	
	
	public List<Follow> findByAllFollowing(Long userId){
		return mapper.findByAllFollowing(userId);
	}
	
	public List<User> notFollowingUser(Long userId) {
		List<Follow> followingList = findByAllFollowing(userId);
		List<Long> followerIdList = followingList.stream().map(f -> f.getFollowerId()).collect(Collectors.toList());
		return userMapper.notFollowingUsers(followerIdList, userId);
	}
}
