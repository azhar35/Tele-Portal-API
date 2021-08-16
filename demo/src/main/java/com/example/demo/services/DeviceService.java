package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Device;
import com.example.demo.beans.UserPlan;
import com.example.demo.data.DeviceRepository;
import com.example.demo.data.UserRepository;
import com.example.demo.exceptions.InvalidDeviceException;
import com.example.demo.exceptions.InvalidUserException;
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

	public Device create(Device device) throws InvalidDeviceException, PlanFullException {

		try {
			int upId = device.getUserPlan().getId();
			UserPlan up = userPlanService.findById(upId);
			if (!up.isPlanFull()) {
				return deviceRepo.save(device);
			} else {
				throw new PlanFullException();
			}
		} catch (Exception e) {
			throw new InvalidDeviceException();
		}
	}

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

	public HttpStatus update(Device device, Integer id) throws PlanFullException, InvalidDeviceException {
		if (deviceRepo.findById(id).isPresent() && device.getId() == id) {
			try {
				int userPlanId1 = device.getUserPlan().getId();
				int userPlanId2 = findById(id).getUserPlan().getId();
				if(userPlanId1 == userPlanId2) {
					deviceRepo.save(device);
					return HttpStatus.OK;
				}
				create(device);
			}catch(Exception e) {
				throw new InvalidDeviceException();
			}
			return HttpStatus.OK;
	}
		return HttpStatus.BAD_REQUEST;
	}

	public List<Device> findDevicesByUserId(int id) throws InvalidUserException {
		List<Device> usrDevices = new ArrayList<>();
		if (userRepo.findById(id).isPresent()) {
			for (UserPlan u : userService.findById(id).getUserPlans()) {
				usrDevices.addAll(u.getDevices());
			}

		} else {
			throw new InvalidUserException();
		}
		return usrDevices;
	}
	
}