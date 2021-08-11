package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.User;
import com.example.demo.data.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public User findById(int id) {
		User returnUser;
		returnUser = userRepo.findById(id).isPresent() ? userRepo.findById(id).get() : new User();
		return returnUser;
	}
	
	public List<User> findAll() {
		return userRepo.findAll();
	}
	
}
