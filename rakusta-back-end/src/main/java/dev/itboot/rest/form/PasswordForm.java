package dev.itboot.rest.form;

public class PasswordForm {

	private Long userId;
	
	private String password;
	
	private String newPassword;

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

	public String getNewPassword() {
		return this.newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "PasswordForm [userId=" + userId + ", password=" + password + ", newPassword=" + this.newPassword + "]";
	}
	
	
}
