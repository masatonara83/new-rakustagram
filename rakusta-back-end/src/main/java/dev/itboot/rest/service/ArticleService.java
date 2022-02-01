package dev.itboot.rest.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import dev.itboot.rest.form.ArticleForm;
import dev.itboot.rest.model.Article;
import dev.itboot.rest.model.Follow;
import dev.itboot.rest.model.Image;
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
	
	public Article insertArticle(ArticleForm form, MultipartFile file) throws IOException {
		Article article = new Article();
		BeanUtils.copyProperties(file, article);
		mapper.insertArticle(article);
		
		String fileEntension = null;
		
		try {
			fileEntension = getEntension(file.getOriginalFilename());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		String base64FileString = Base64.getEncoder().encodeToString(file.getBytes());
		if("jpg".equals(fileEntension)) {
			base64FileString = "data:image/jpeg;base64," + base64FileString;
		} else if("png".equals(fileEntension)) {
			base64FileString = "data:image/png;base64," + base64FileString;
		}
		
		Image image = new Image();
		image.setImageId(article.getArticleId());
		image.setImagePath(base64FileString);
		
		return null;
		
		
	}
	
	private String getEntension(String fileName) throws Exception {
		if(fileName == null) {
			throw new FileNotFoundException("ファイル名がありません");
		}
		
		int point = fileName.lastIndexOf(".");
		if(point == -1) {
			throw new FileNotFoundException("形式が正しくありません");
		}
		return fileName.substring(point + 1);
	}
}
