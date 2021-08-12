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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Device {
	
	//Fields
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "device_id")
	private int id;
	
	@Column(name = "phone_number", unique = true)
	// @Pattern(regexp = "^[0-9]{10}$")
	// @Pattern(regexp = "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$")
	private long phoneNumber;
	
	@Column(name = "device_name")
	@NotNull
	private String deviceName;
	
	@JsonIgnore
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

	public long getPhone_number() {
		return phoneNumber;
	}

	public void setPhone_number(int phone_number) {
		this.phoneNumber = phone_number;
	}

	public String getDevice_name() {
		return deviceName;
	}

	public void setDevice_name(String device_name) {
		this.deviceName = device_name;
	}

	public UserPlan getUserplan() {
		return userPlan;
	}

	public void setUserplan(UserPlan userplan) {
		this.userPlan = userplan;
	}

	
	
	//Constructor(s)
	
	public Device() {
		super();
	}

}