package com.invictus.web.service;

import java.text.MessageFormat;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.invictus.web.dao.UserDAO;
import com.invictus.web.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
	
	private final UserDAO userDAO;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		final Optional<User> optionalUser = userDAO.findByEmail(email);
		
		if(optionalUser.isPresent()) {
			return optionalUser.get();
		}else {
			throw new UsernameNotFoundException(MessageFormat.format("User with email{0} cannot be found.", email));
		}
	}
	
	public void signUpUser(User user) {
		final String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userDAO.save(user);
	}

}
