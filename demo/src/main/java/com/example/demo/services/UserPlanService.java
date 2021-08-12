package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.UserPlan;
import com.example.demo.data.UserPlanRepository;

@Service
public class UserPlanService {
	
	@Autowired
	private UserPlanRepository userPlanRepo;
	
	public UserPlan create(UserPlan userPlan) {
		return userPlanRepo.save(userPlan);
	}
	
	public UserPlan findById(int id) {
		UserPlan returnUser;
		returnUser = userPlanRepo.findById(id).isPresent() ? userPlanRepo.findById(id).get() : new UserPlan();
		return returnUser;
	}
	
	public List<UserPlan> findAll() {
		return userPlanRepo.findAll();
	}
	
	public HttpStatus update(UserPlan userPlan, Integer id) {
		if (userPlanRepo.findById(id).isPresent() && userPlan.getId() == id) {
			userPlan.setId(id);
			userPlanRepo.save(userPlan);
			return HttpStatus.NO_CONTENT;
		}
		return HttpStatus.BAD_REQUEST;
	}
	
	public HttpStatus delete(int id) {
		if (userPlanRepo.findById(id).isPresent()) {
			userPlanRepo.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.BAD_REQUEST;
	}

}
