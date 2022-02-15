package dev.itboot.rest.model;

public class UserImage {

	
	private String imagePath;
	
	private Long userId;

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "UserImage [imagePath=" + imagePath + ", userId=" + userId + "]";
	}
	
	
	

}
