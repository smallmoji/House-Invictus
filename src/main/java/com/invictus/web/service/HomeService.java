package com.invictus.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Component;

import com.invictus.web.model.TestUser;


public interface HomeService {
	public HashMap<String, String> test(TestUser testUser);
	
//	public HashMap<String, String> getDiscussions();
}
