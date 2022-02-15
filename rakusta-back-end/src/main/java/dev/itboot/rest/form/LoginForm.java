package dev.itboot.rest.form;

public class LoginForm {

	private String userMailAddress;
	
	private String password;

	public String getUserMailAddress() {
		return userMailAddress;
	}

	public void setUserMailAddress(String userMailAddress) {
		this.userMailAddress = userMailAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginForm [userMailAddress=" + userMailAddress + ", password=" + password + "]";
	}

	
	
}
