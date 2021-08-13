package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.UserPlan;
import com.example.demo.exceptions.InvalidUserPlanException;
import com.example.demo.services.UserPlanService;

@RestController
@RequestMapping("/userplans")
@CrossOrigin("*")
public class UserPlanController {
	@Autowired
	private UserPlanService userPlanService;
	
	@GetMapping()	
	public ResponseEntity<List<UserPlan>> findAll(){
		return ResponseEntity.ok(userPlanService.findAll());
	}
	
	@GetMapping("/userplan/{id}")
	public ResponseEntity<UserPlan> findUserPlanById(@PathVariable("id") Integer id) {
		UserPlan body = userPlanService.findById(id);
		return new ResponseEntity<>(body,HttpStatus.OK);
	}
	
	@PostMapping(value = "/userplan")
	public ResponseEntity<UserPlan> createUserPlan(@RequestBody UserPlan userPlan) throws InvalidUserPlanException {
		UserPlan body = userPlanService.create(userPlan);
		return new ResponseEntity<>(body, HttpStatus.CREATED);
	}
	
	@PutMapping("/userplan/{id}")
	public ResponseEntity<Void> updateUserPlan(@RequestBody UserPlan userPlan,@PathVariable("id") Integer id) {
		return new ResponseEntity<>(userPlanService.update(userPlan, id));
	}
	
	@DeleteMapping("/userplan/{id}")
	public ResponseEntity<UserPlan> deleteUserPlan(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(userPlanService.delete(id));	
	}
}
