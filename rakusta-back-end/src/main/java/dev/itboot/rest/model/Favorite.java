package dev.itboot.rest.model;

/**
 * Favoriteドメイン
 * @author naramasato
 *
 */
public class Favorite {

	private Long favoriteId;
	private Long userId;
	private Long articleId;
	private User user;
	
	//getter and setter
	public Long getFavoriteId() {
		return favoriteId;
	}
	public void setFavoriteId(Long favoriteId) {
		this.favoriteId = favoriteId;
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

