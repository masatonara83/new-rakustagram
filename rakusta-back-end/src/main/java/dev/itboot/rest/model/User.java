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
	//パスワード
	private 	String 			userPassword;
	
	//登録日	
	private 	Timestamp 		userRegistrationDate;
	//更新日
	private 	Date 			updateDate;
	//プロフィール画像
	private		String			userImagePath;
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
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
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
	public String getUserImagePath() {
		return userImagePath;
	}
	public void setUserImagePath(String userImagePath) {
		this.userImagePath = userImagePath;
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
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userFullName=" + userFullName
				+ ", userOverview=" + userOverview + ", userMailAddress=" + userMailAddress + ", userPassword="
				+ userPassword + ", userRegistrationDate=" + userRegistrationDate + ", updateDate=" + updateDate
				+ ", userImagePath=" + userImagePath + ", followList=" + followList + ", articleList=" + articleList
				+ "]";
	}
	
}