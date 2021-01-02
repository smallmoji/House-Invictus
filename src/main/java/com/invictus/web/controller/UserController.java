package com.invictus.web.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.invictus.web.model.User;
import com.invictus.web.service.UserService;

@RestController
public class UserController {
	
	UserService userService;
	
	@RequestMapping("/signup")
	public HashMap<String, String> signupUser(@RequestParam String name, @RequestParam String email, @RequestParam String password){
		HashMap<String, String> resultMap = new HashMap<>();
		User newUser = new User();
		newUser.setEmail(email);
		newUser.setName(name);
		newUser.setPassword(password);
		
		userService.signUpUser(newUser);
		
		resultMap.put("result", "success");
		return resultMap;
	}
}
