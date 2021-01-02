package com.invictus.web.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.invictus.web.model.User;

public interface UserDAO extends CrudRepository<User, Long> {
	
	Optional<User> findByEmail(String email);
}
