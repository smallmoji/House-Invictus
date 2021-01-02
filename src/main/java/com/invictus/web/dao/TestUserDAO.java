package com.invictus.web.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.invictus.web.model.TestUser;

public interface TestUserDAO extends CrudRepository<TestUser, Integer> {
	
	@Query("SELECT u FROM TestUser u WHERE u.userName='Test4'")
	public TestUser find();
}
