package dev.itboot.rest.form;

public class UserForm {

	private String userName;
	
	private String userFullName;
	
	private String userMailAddress;
	
	private String userPassword;

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

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	@Override
	public String toString() {
		return "UserForm [userName=" + userName + ", userFullName=" + userFullName + ", userMailAddress="
				+ userMailAddress + ", userPassword=" + userPassword + "]";
	}
	
	
}
