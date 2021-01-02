package com.invictus.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.invictus.web.service.UserService;

import lombok.AllArgsConstructor;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//	private final UserService userService;
//	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Bean
	@Override
	protected UserDetailsService userDetailsService() {
		List<UserDetails> users = new ArrayList<>();
		users.add(User.withDefaultPasswordEncoder().username("jayson").password("1234").roles("USER").build());
		
		return new InMemoryUserDetailsManager(users);
	}
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.csrf().disable().
//				authorizeRequests()
//				.antMatchers("/signup/**", "/signin/**")
//				.permitAll()
//				.anyRequest()
//				.authenticated()
//				.and()
//				.formLogin()
//				.loginPage("/signin")
//				.permitAll();
//	}

//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//        .withUser("test").password(bCryptPasswordEncoder.encode("test"))
//        .roles("USER");
//		auth.userDetailsService(userService)
//				.passwordEncoder(bCryptPasswordEncoder);
//	}
}
