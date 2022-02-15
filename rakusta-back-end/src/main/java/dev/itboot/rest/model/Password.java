package dev.itboot.rest.model;

public class Password {

	private Long passwordId;
	
	private String password;

	public Long getPasswordId() {
		return passwordId;
	}

	public void setPasswordId(Long passwordId) {
		this.passwordId = passwordId;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Password [passwordId=" + passwordId + ", password=" + password + "]";
	}
	
	
}
