package dev.itboot.rest.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.itboot.rest.model.Article;
import dev.itboot.rest.model.Follow;
import dev.itboot.rest.repository.ArticleMapper;

@Service
@Transactional
public class ArticleService {
	
	@Autowired
	private FollowService followService;

	@Autowired
	private ArticleMapper mapper;
	
	
	public List<Article> findFollowingArticle(Long userId){
		List<Follow> followingList = followService.findByAllFollowing(userId);
		List<Long> followerIdList = followingList.stream().map(f -> f.getFollowerId()).collect(Collectors.toList());
		followerIdList.add(userId);
		return mapper.findFollowingArticle(followerIdList);
	}
}
