package com.example.demo.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Device {
	
	//Fields
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "device_id")
	private int id;
	
	@Column(name = "phone_number", unique = true)
	private String phoneNumber;
	
	@Column(name = "device_name")
	@NotNull
	private String deviceName;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "device_userplan_id")
	private UserPlan userPlan;

	
	
	//Getters & Setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhone_number() {
		return phoneNumber;
	}

	public void setPhone_number(String phone_number) {
		this.phoneNumber = phone_number;
	}

	public String getDevice_name() {
		return deviceName;
	}

	public void setDevice_name(String device_name) {
		this.deviceName = device_name;
	}

	public UserPlan getUserPlan() {
		return userPlan;
	}

	public void setUserPlan(UserPlan userPlan) {
		this.userPlan = userPlan;
	}

	
	
	//Constructor(s)
	
	public Device() {
		super();
	}

}
