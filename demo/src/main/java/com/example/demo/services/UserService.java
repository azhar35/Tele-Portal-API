package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.User;
import com.example.demo.data.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public User create(User user) {
		return userRepo.save(user);
	}
	public User findById(int id) {
		User returnUser;
		returnUser = userRepo.findById(id).isPresent() ? userRepo.findById(id).get() : new User();
		return returnUser;
	}
	
	public List<User> findAll() {
		return userRepo.findAll();
	}
	
	public HttpStatus update(User user, Integer id) {
		if (userRepo.findById(id).isPresent() && user.getId() == id) {
			userRepo.save(user);
			return HttpStatus.NO_CONTENT;
		}
		return HttpStatus.BAD_REQUEST;
	}
}
