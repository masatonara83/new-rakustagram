package dev.itboot.rest.form;

public class SignUpForm {

	private String userName;
	
	private String userFullName;
	
	private String userMailAddress;
	
	private String password;

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
		return "SignUpForm [userName=" + userName + ", userFullName=" + userFullName + ", userMailAddress="
				+ userMailAddress + ", password=" + password + "]";
	}

	
	
	
}
