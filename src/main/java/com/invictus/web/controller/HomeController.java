package com.invictus.web.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.invictus.web.model.TestUser;
import com.invictus.web.service.HomeService;

@RestController
public class HomeController {
	@Autowired
	HomeService homeService;
	
	@RequestMapping("/home")
	public HashMap<String, String> home(@RequestParam String name, @RequestParam String email){
		HashMap<String, String> resultMap = new HashMap<>();
//		TestUser testUser = new TestUser();
//		
//		testUser.setUserName(name);
//		testUser.setUserEmail(email);
		
//		resultMap = homeService.test(testUser);
		
		resultMap.put("page", "home");

		return resultMap;
	}
	
	@RequestMapping("/discussions")
	public HashMap<String, String> getDiscussions(){
		HashMap<String, String> resultMap = new HashMap<>();
		try {
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resultMap;
		
	}
	
}
