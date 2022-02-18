package dev.itboot.rest.Logic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dev.itboot.rest.model.Article;
import dev.itboot.rest.repository.ArticleMapper;

@Component
public class ArticleLogic {

	@Autowired
	private ArticleMapper articleMapper;
	
	public List<Article> findUserArticles(Long userId){
		return articleMapper.findByArticleList(userId);
	}
}
