package com.invictus.web.dao;

import java.util.HashMap;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public class HomeDAOImpl implements HomeDAO {
	public String testDao() {
		return "from the dao";
	}
	
	public HashMap<String, String> insertData(){
		HashMap<String, String> resultMap = new HashMap<>();
		
		return resultMap;
	}
}
