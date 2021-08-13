package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Device;
import com.example.demo.beans.UserPlan;
import com.example.demo.data.DeviceRepository;

@Service
public class DeviceService {
	@Autowired
	private DeviceRepository deviceRepo;
	@Autowired
	private UserPlanService userPlanService;

	public Device create(Device device) {
		int upId = device.getUserPlan().getId();
		UserPlan up = userPlanService.findById(upId);
		if(up.getDevices().size() < up.getPlan().getMax_devices()) {
			
			return deviceRepo.save(device);
		}
		
		return new Device();
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

	public HttpStatus update(Device device, Integer id) {
		if (deviceRepo.findById(id).isPresent() && device.getId() == id) {
			device.setId(id);
			deviceRepo.save(device);
			return HttpStatus.NO_CONTENT;
		}
		return HttpStatus.BAD_REQUEST;
	}
}
