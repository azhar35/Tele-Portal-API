package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.User;
import com.example.demo.data.DeviceRepository;
import com.example.demo.data.UserRepository;
import com.example.demo.exceptions.InvalidDeviceException;
import com.example.demo.exceptions.InvalidUserException;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private DeviceRepository deviceRepo;

	public User create(User user) throws InvalidUserException {
		try {
			return userRepo.save(user);
		} catch (Exception e) {
			throw new InvalidUserException();
		}
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
			try {
				userRepo.save(user);
				return HttpStatus.NO_CONTENT;
			} catch (Exception e) {
				return HttpStatus.BAD_REQUEST;
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

	public User findUserByDeviceId(int id) throws InvalidDeviceException {
		if (deviceRepo.findById(id).isPresent()) {
			return deviceRepo.findById(id).get().getUserPlan().getUser();
		}
		throw new InvalidDeviceException();

	}
	
	public User findByUsername(String username) {
		return userRepo.findByUsername(username);
	}
	
}
