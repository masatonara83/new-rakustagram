package dev.itboot.rest.model;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

/**
 * usersテーブル
 * @author naramasato
 *
 */
public class User {

	//ユーザーID
	private 	Long			userId;
	//ユーザーネーム
	private 	String 			userName;	
	//ユーザーの本名
	private 	String 			userFullName;
	//ユーザー概要
	private 	String 			userOverview;
	//メールアドレス
	private 	String 			userMailAddress;
	//登録日	
	private 	Timestamp 		userRegistrationDate;
	//更新日
	private 	Date 			updateDate;
	
	private Password password;
	
	private UserImage image;
	
	//投稿数
	private Integer articleCount;
	//フォローしている数
	private Integer followingCount;
	//フォローされている数
	private Integer followerCount;
	//FollowをListで格納
	private 	List<Follow> 	followList;
	//ArticleをListで格納
	private 	List<Article> 	articleList;
	
	//ゲッターとセッター
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserFullName() {
		return userFullName;
	}
	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}
	public String getUserOverview() {
		return userOverview;
	}
	public void setUserOverview(String userOverview) {
		this.userOverview = userOverview;
	}
	public String getUserMailAddress() {
		return userMailAddress;
	}
	public void setUserMailAddress(String userMailAddress) {
		this.userMailAddress = userMailAddress;
	}
	public Timestamp getUserRegistrationDate() {
		return userRegistrationDate;
	}
	public void setUserRegistrationDate(Timestamp userRegistrationDate) {
		this.userRegistrationDate = userRegistrationDate;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public List<Follow> getFollowList() {
		return followList;
	}
	public void setFollowList(List<Follow> followList) {
		this.followList = followList;
	}
	public List<Article> getArticleList() {
		return articleList;
	}
	public void setArticleList(List<Article> articleList) {
		this.articleList = articleList;
	}
	public Integer getArticleCount() {
		return articleCount;
	}
	public void setArticleCount(Integer articleCount) {
		this.articleCount = articleCount;
	}
	public Integer getFollowingCount() {
		return followingCount;
	}
	public void setFollowingCount(Integer followingCount) {
		this.followingCount = followingCount;
	}
	public Integer getFollowerCount() {
		return followerCount;
	}
	public void setFollowerCount(Integer followerCount) {
		this.followerCount = followerCount;
	}
	public Password getPassword() {
		return password;
	}
	public void setPassword(Password password) {
		this.password = password;
	}
	public UserImage getImage() {
		return image;
	}
	public void setImage(UserImage image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userFullName=" + userFullName
				+ ", userOverview=" + userOverview + ", userMailAddress=" + userMailAddress + ", userRegistrationDate="
				+ userRegistrationDate + ", updateDate=" + updateDate + ", password=" + password + ", image=" + image
				+ ", articleCount=" + articleCount + ", followingCount=" + followingCount + ", followerCount="
				+ followerCount + ", followList=" + followList + ", articleList=" + articleList + "]";
	}
	
	
}