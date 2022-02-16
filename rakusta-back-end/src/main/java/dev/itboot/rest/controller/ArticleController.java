package dev.itboot.rest.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import dev.itboot.rest.exception.NotFoundException;
import dev.itboot.rest.form.ArticleForm;
import dev.itboot.rest.model.Article;
import dev.itboot.rest.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/article")
@RestController
public class ArticleController {

	@Autowired
	private ArticleService service;
	
	@Operation(summary = "フォローしているユーザーの投稿内容を全件取得します")
	@GetMapping("/{id}")
	public List<Article> findByAllFollowingArticle(@PathVariable Long id){
		return service.findFollowingArticle(id);
	}
	
	@Operation(summary = "画像投稿をします")
	@PostMapping("")
	public Article insertArticle(@RequestPart("file") MultipartFile image, @RequestPart("form") ArticleForm form ) {
		
		try {
			return service.insertArticle(form, image);
		} catch (Exception e) {
			throw new NotFoundException("ファイルが存在しません");
		}
		
	}
}
