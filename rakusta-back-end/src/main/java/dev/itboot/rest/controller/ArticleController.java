package dev.itboot.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.model.Article;
import dev.itboot.rest.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;

@RequestMapping("/api/v1/article")
@RestController
public class ArticleController {

	@Autowired
	private ArticleService service;
	
	@Operation(summary = "フォローしているユーザーの投稿内容を全件取得します")
	@GetMapping("/{id}")
	public List<Article> findByAllFollowingArticle(@PathVariable Integer id){
		return service.findFollowingArticle(id);
	}
}
