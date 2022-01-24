package dev.itboot.rest.model;

/**
 * Favoriteドメイン
 * @author naramasato
 *
 */
public class Favorite {

	private Integer favoriteId;
	private Integer userId;
	private Integer articleId;
	private User user;
	
	//getter and setter
	public Integer getFavoriteId() {
		return favoriteId;
	}
	public void setFavoriteId(Integer favoriteId) {
		this.favoriteId = favoriteId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getArticleId() {
		return articleId;
	}
	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Favorite [favoriteId=" + favoriteId + ", userId=" + userId + ", articleId=" + articleId + ", user="
				+ user + "]";
	}
}

