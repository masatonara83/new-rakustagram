package dev.itboot.rest.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dev.itboot.rest.model.Follow;

@Mapper
public interface FollowMapper {

	public List<Follow> findByAllFollowing(Long userId);
	
	public void following(@Param("followingId") Long followingId, @Param("followerId") Long followerId);
	
}
