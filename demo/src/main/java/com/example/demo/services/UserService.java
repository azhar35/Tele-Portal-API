package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.User;
import com.example.demo.data.UserRepository;
import com.example.demo.exceptions.InvalidUserException;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	public User create(User user) throws InvalidUserException {
		if (user.getUsername() != null && user.getPassword() != null) {
			return userRepo.save(user);
		}
		throw new InvalidUserException();
	}

	public User findById(int id) throws InvalidUserException {
		if (userRepo.findById(id).isPresent()) {
			return userRepo.findById(id).get();
		}
		throw new InvalidUserException();
	}

	public List<User> findAll() {
		return userRepo.findAll();
	}

	public HttpStatus update(User user, Integer id) {
		if (userRepo.findById(id).isPresent() && user.getId() == id) {
			if (user.getUsername() != null && user.getPassword() != null) {
				userRepo.save(user);
				return HttpStatus.NO_CONTENT;
			}

		}
		return HttpStatus.BAD_REQUEST;
	}

	public HttpStatus delete(int id) {
		if (userRepo.findById(id).isPresent()) {
			userRepo.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.BAD_REQUEST;
	}

}
