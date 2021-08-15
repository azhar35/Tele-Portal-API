package com.example.demo.security;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import com.example.demo.beans.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;

import com.example.demo.data.UserRepository;
import com.example.demo.services.UserService;


public class MyUserDetails implements UserDetails {
	
	private String username;
	private String password;
	
	public MyUserDetails( User user) {
		username = user.getUsername();
		password = user.getPassword();
	}
	public MyUserDetails() {
		
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {

		return true;
	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {

		return true;
	}

	@Override
	public boolean isEnabled() {

		return true;
	}

}
