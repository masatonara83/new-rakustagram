package dev.itboot.rest.model;

/**
 * Followドメイン
 * @author naramasato
 *
 */
public class Follow {

	private Integer followId;
	private Integer followingId;
	private Integer followerId;
	private User user;
	
	//getter and setter
	public Integer getFollowId() {
		return followId;
	}
	public void setFollowId(Integer followId) {
		this.followId = followId;
	}
	public Integer getFollowingId() {
		return followingId;
	}
	public void setFollowingId(Integer followingId) {
		this.followingId = followingId;
	}
	public Integer getFollowerId() {
		return followerId;
	}
	public void setFollowerId(Integer followerId) {
		this.followerId = followerId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Follow [followId=" + followId + ", followingId=" + followingId + ", followerId=" + followerId
				+ ", user=" + user + "]";
	}
}