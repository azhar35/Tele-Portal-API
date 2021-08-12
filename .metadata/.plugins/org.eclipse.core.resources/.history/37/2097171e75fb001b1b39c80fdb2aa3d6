package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Device;
import com.example.demo.data.DeviceRepository;

@Service
public class DeviceService {
	@Autowired
	private DeviceRepository deviceRepo;

	public Device create(Device device) {
		return deviceRepo.save(device);
	}

	public List<Device> findAll() {
		return deviceRepo.findAll();
	}

}
