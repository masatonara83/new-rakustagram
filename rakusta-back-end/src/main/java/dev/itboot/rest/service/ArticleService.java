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
import dev.itboot.rest.model.Tag;
import dev.itboot.rest.repository.ArticleMapper;
import dev.itboot.rest.repository.ImageMapper;
import dev.itboot.rest.repository.TagMapper;
import dev.itboot.rest.utility.ConversionUtil;

@Service
@Transactional
public class ArticleService {
	
	@Autowired
	private FollowService followService;

	@Autowired
	private ArticleMapper articleMapper;
	
	@Autowired
	private ImageMapper imageMapper;
	
	@Autowired
	private TagMapper tagMapper;
	
	
	public List<Article> findFollowingArticle(Long userId){
		List<Follow> followingList = followService.findByAllFollowing(userId);
		List<Long> followerIdList = followingList.stream().map(f -> f.getFollowerId()).collect(Collectors.toList());
		followerIdList.add(userId);
		return articleMapper.findFollowingArticle(followerIdList);
	}
	
	/**
	 * 画像記事をINSERT処理
	 * @param form
	 * @param file
	 * @return 投稿内容
	 * @throws IOException
	 */
	public Article insertArticle(ArticleForm form, MultipartFile file) throws IOException {
		//記事の内容のみ投稿
		Article article = new Article();
		BeanUtils.copyProperties(form, article);
		articleMapper.insertArticle(article);
		
		//tagをINSERTする処理
		String[] tagArray = ConversionUtil.stringConversion(form.getTag());
		if(tagArray != null) {
			for (String string : tagArray) {
				Tag tag = new Tag();
				tag.setArticleId(article.getArticleId());
				tag.setTagName(string);
				tagMapper.insertTag(tag);
			}
		}
		
		//imagesテーブルへのinsert処理
		String base64FileString = ConversionUtil.imageConversion(file);
		
		Image image = new Image();
		image.setArticleId(article.getArticleId());
		image.setImagePath(base64FileString);
		
		imageMapper.insertImage(image);
		
		return findByArticle(article.getArticleId());
		
	}
	
	public Article findByArticle(Long articleId) {
		return articleMapper.findByArticle(articleId);
	}
	
	public List<Article> findByTagArticles(String tagName){
		return articleMapper.findByTagArticles(tagName);
	}
}
