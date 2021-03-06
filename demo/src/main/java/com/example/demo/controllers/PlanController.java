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

import com.example.demo.beans.Plan;
import com.example.demo.beans.User;
import com.example.demo.services.PlanService;

@RestController
@RequestMapping("/plans")
@CrossOrigin("*")
public class PlanController {
	@Autowired
	private PlanService planService;

	@GetMapping()
	public ResponseEntity<List<Plan>> findAll() {
		return ResponseEntity.ok(planService.findAll());
	}

	@PostMapping(value = "/plan")
	public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
		Plan body = planService.create(plan);
		return new ResponseEntity<>(body, HttpStatus.CREATED);
	}

	@GetMapping("/plan/{id}")
	public ResponseEntity<Plan> findUserById(@PathVariable("id") Integer id) {
		Plan body = planService.findById(id);
		return new ResponseEntity<>(body, HttpStatus.OK);
	}

	@PutMapping("/plan/{id}")
	public ResponseEntity<Void> updatePlan(@RequestBody Plan plan, @PathVariable("id") Integer id) {
		return new ResponseEntity<>(planService.update(plan, id));
	}

	@DeleteMapping("/plan/{id}")
	public ResponseEntity<User> deletePlan(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(planService.delete(id));
	}
}
