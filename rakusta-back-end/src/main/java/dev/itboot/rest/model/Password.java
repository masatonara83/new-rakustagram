package dev.itboot.rest.model;

public class Password {

	private Long userId;
	
	private String password;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Password [userId=" + userId + ", password=" + password + "]";
	}
	
	

}
