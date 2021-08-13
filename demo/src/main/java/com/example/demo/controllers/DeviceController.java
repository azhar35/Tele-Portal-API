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

import com.example.demo.beans.Device;
import com.example.demo.beans.User;
import com.example.demo.exceptions.InvalidUserException;
import com.example.demo.exceptions.InvalidUserPlanException;
import com.example.demo.exceptions.PlanFullException;
import com.example.demo.services.DeviceService;

@RestController
@RequestMapping("/devices")
@CrossOrigin("*")
public class DeviceController {
	@Autowired
	private DeviceService deviceService;

	@GetMapping()
	public ResponseEntity<List<Device>> findAll() {
		return ResponseEntity.ok(deviceService.findAll());
	}

	@GetMapping("/device/{id}")
	public ResponseEntity<Device> findUserById(@PathVariable("id") Integer id) {
		Device body = deviceService.findById(id);
		return new ResponseEntity<>(body, HttpStatus.OK);
	}

	@PostMapping(value = "/device")
	public ResponseEntity<Device> create(@RequestBody Device device)
			throws PlanFullException, InvalidUserPlanException {
		Device body = deviceService.create(device);
		return new ResponseEntity<>(body, HttpStatus.CREATED);
	}

	@DeleteMapping("/device/{id}")
	public ResponseEntity<User> deleteDevice(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(deviceService.delete(id));
	}

	@PutMapping("/device/{id}")
	public ResponseEntity<Void> updateDevice(@RequestBody Device device, @PathVariable Integer id)
			throws PlanFullException {
		return new ResponseEntity<>(deviceService.update(device, id));
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<List<Device>> findDevicesByUser(@PathVariable("id") Integer id) throws InvalidUserException {
		List<Device> body = deviceService.findDevicesByUserId(id);
		return new ResponseEntity<>(body, HttpStatus.OK);

	}
}
