package dev.itboot.rest.model;

import java.sql.Timestamp;

public class Comment {

	private Long commentId;
	private Long userId;
	private Long articleId;
	private String comment;
	private Timestamp commentPostDate;
	private User user;
	
	//getter and setter
	public Long getCommentId() {
		return commentId;
	}
	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getArticleId() {
		return articleId;
	}
	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Timestamp getCommentPostDate() {
		return commentPostDate;
	}
	public void setCommentPostDate(Timestamp commentPostDate) {
		this.commentPostDate = commentPostDate;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", userId=" + userId + ", articleId=" + articleId + ", comment="
				+ comment + ", commentPostDate=" + commentPostDate + ", user=" + user + "]";
	}
	
	
	
	
}

