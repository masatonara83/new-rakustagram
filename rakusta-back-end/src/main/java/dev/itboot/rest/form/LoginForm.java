package dev.itboot.rest.form;

public class LoginForm {

	private String userMailAddress;
	
	private String userPassword;

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

	@Override
	public String toString() {
		return "LoginForm [userMailAddress=" + userMailAddress + ", userPassword=" + userPassword + "]";
	}
	
	
}
