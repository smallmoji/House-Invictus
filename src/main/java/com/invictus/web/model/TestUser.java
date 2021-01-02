package com.invictus.web.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TestUser {
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	int userId;
	String userName;
	String userEmail;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	@Override
	public String toString() {
		return "TestUser [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + "]";
	}
	
}
