package com.invictus.web.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.invictus.web.dao.HomeDAO;
import com.invictus.web.dao.TestUserDAO;
import com.invictus.web.model.TestUser;

@Component
public class HomeServiceImpl implements HomeService {
	
	@Autowired
	HomeDAO homeDAO;
	@Autowired
	TestUserDAO testUserDAO;
	
	public HashMap<String, String> test(TestUser testUser) {
		HashMap<String, String> resultMap = new HashMap<>();
		TestUser foundUser = new TestUser();
		
		try {
			testUserDAO.save(testUser);
			foundUser = testUserDAO.find();
		} catch (Exception e) {
			e.printStackTrace();
		}

		
		resultMap.put("result", "success");
		resultMap.put("found user email", foundUser.getUserEmail());
		
		return resultMap;
	}
}
