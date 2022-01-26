package dev.itboot.rest.model;

/**
 * Followドメイン
 * @author naramasato
 *
 */
public class Follow {

	private Long followId;
	private Long followingId;
	private Long followerId;
	private User user;
	
	//getter and setter
	
	@Override
	public String toString() {
		return "Follow [followId=" + followId + ", followingId=" + followingId + ", followerId=" + followerId
				+ ", user=" + user + "]";
	}

	public Long getFollowId() {
		return followId;
	}

	public void setFollowId(Long followId) {
		this.followId = followId;
	}

	public Long getFollowingId() {
		return followingId;
	}

	public void setFollowingId(Long followingId) {
		this.followingId = followingId;
	}

	public Long getFollowerId() {
		return followerId;
	}

	public void setFollowerId(Long followerId) {
		this.followerId = followerId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}