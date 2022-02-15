package dev.itboot.rest.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import dev.itboot.rest.model.Article;

@Mapper
public interface ArticleMapper {

	public List<Article> findFollowingArticle(@Param("followingIdList") List<Long> followingIdList);
	
	public Long insertArticle(Article article);
	
	public Article findByArticle(Long articleId);
}
