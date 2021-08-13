package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Plan;
import com.example.demo.beans.User;
import com.example.demo.data.PlanRepository;

@Service
public class PlanService {
	@Autowired
	private PlanRepository planRepo;

	public Plan create(Plan plan) {
		return planRepo.save(plan);
	}

	public List<Plan> findAll() {
		return planRepo.findAll();
	}

	public Plan findById(int id) {
		Plan returnPlan;
		returnPlan = planRepo.findById(id).isPresent() ? planRepo.findById(id).get() : new Plan();
		return returnPlan;
	}

	public HttpStatus update(Plan plan, Integer id) {
		if (planRepo.findById(id).isPresent() && plan.getId() == id) {
			planRepo.save(plan);
			return HttpStatus.NO_CONTENT;
		}
		return HttpStatus.BAD_REQUEST;
	}

	public HttpStatus delete(int id) {
		if (planRepo.findById(id).isPresent()) {
			planRepo.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.BAD_REQUEST;
	}

}
