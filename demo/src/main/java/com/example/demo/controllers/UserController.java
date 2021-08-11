package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.User;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/user")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User body = userService.create(user);
		return new ResponseEntity<>(body, HttpStatus.CREATED);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> findUserById(@PathVariable("id") Integer id) {
		User body = userService.findById(id);
		return new ResponseEntity<>(body,HttpStatus.OK);
		
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<Void> updateUser(@RequestBody User user, @PathVariable Integer id ) {
		return new ResponseEntity<>(userService.update(user, id));
	}
}
