package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Device;
import com.example.demo.beans.User;
import com.example.demo.beans.UserPlan;
import com.example.demo.data.DeviceRepository;
import com.example.demo.data.UserRepository;
import com.example.demo.exceptions.InvalidUserException;
import com.example.demo.exceptions.InvalidUserPlanException;
import com.example.demo.exceptions.PlanFullException;

@Service
public class DeviceService {
	@Autowired
	private DeviceRepository deviceRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private UserPlanService userPlanService;
	@Autowired
	private UserService userService;

	public Device create(Device device) throws PlanFullException, InvalidUserPlanException {
		if(device.getUserPlan() == null) {
			throw new InvalidUserPlanException();
		}
		int upId = device.getUserPlan().getId();
		UserPlan up = userPlanService.findById(upId);
		if (up.getDevices().size() < up.getPlan().getMax_devices()) {

			return deviceRepo.save(device);
		}
		throw new PlanFullException();
	}

	// might be custom to find all devices associated with the user

	public List<Device> findAll() {
		return deviceRepo.findAll();
	}

	public Device findById(int id) {
		Device returnUser;
		returnUser = deviceRepo.findById(id).isPresent() ? deviceRepo.findById(id).get() : new Device();
		return returnUser;
	}

	public HttpStatus delete(Integer id) {
		if (deviceRepo.findById(id).isPresent()) {
			deviceRepo.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.BAD_REQUEST;
	}

	public HttpStatus update(Device device, Integer id) throws PlanFullException {
		if (deviceRepo.findById(id).isPresent() && device.getId() == id) {
			if(device.getUserPlan() == null) { 
				return HttpStatus.BAD_REQUEST; //if request body doesn't contain UserPlan object
			}
			int upId = device.getUserPlan().getId();
			UserPlan up = userPlanService.findById(upId);
			if (up.getDevices().size() <= up.getPlan().getMax_devices()) { //same check as create, but with <=
				deviceRepo.save(device);
				return HttpStatus.NO_CONTENT;
			}
		}
		return HttpStatus.BAD_REQUEST;
	}
	public List<Device> findDevicesByUserId(int id) throws InvalidUserException{
		List<Device> usrDevices = new ArrayList<>();
		if (userRepo.findById(id).isPresent()) {
			for(UserPlan u : userService.findById(id).getUserPlans()) {
				usrDevices.addAll(u.getDevices());
			}

		}
		else {
			throw new InvalidUserException();
		}
		return usrDevices;
	}
}
