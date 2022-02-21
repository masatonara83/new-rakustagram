package dev.itboot.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.itboot.rest.model.Article;
import dev.itboot.rest.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;

@RequestMapping("/api/v1/tag")
@RestController
@CrossOrigin("http://localhost:3000")
public class TagSearchController {
	
	@Autowired
	private ArticleService articleService;
	
	@Operation(summary = "タグネームから関連記事を取得します")
	@GetMapping("{tagName}")
	public List<Article> findByTagArticle(@PathVariable String tagName){
		return articleService.findByTagArticles(tagName);
	}

}
