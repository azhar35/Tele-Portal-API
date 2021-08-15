package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.User;
import com.example.demo.exceptions.InvalidDeviceException;
import com.example.demo.exceptions.InvalidUserException;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	// to display all users in the database
	@GetMapping()
	public ResponseEntity<List<User>> findAll() {
		return ResponseEntity.ok(userService.findAll());
	}

	@PostMapping(value = "/user")
	public ResponseEntity<User> createUser(@RequestBody User user) throws InvalidUserException {
		User body = userService.create(user);
		return new ResponseEntity<>(body, HttpStatus.CREATED);
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<User> findUserById(@PathVariable("id") Integer id) throws InvalidUserException {
		User body = userService.findById(id);
		return new ResponseEntity<>(body, HttpStatus.OK);

	}

	@PutMapping("/user/{id}")
	public ResponseEntity<Void> updateUser(@RequestBody User user, @PathVariable("id") Integer id) {
		return new ResponseEntity<>(userService.update(user, id));
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(userService.delete(id));
	}

	@GetMapping("/user/device/{id}")
	public ResponseEntity<User> findUserByDeviceId(@PathVariable("id") Integer id) throws InvalidDeviceException {
		return new ResponseEntity<>(userService.findUserByDeviceId(id), HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity<User> findUserByUsername(@RequestParam String name) throws InvalidUserException {
		return new ResponseEntity<>(userService.findByUsername(name), HttpStatus.OK);
	}
}