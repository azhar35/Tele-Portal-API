package com.example.demo.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class UserPlan {
	
	//Fields
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userplan_id")
	private int id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "userplan_user_id", referencedColumnName = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "userplan_plan_id", referencedColumnName = "plan_id")
	private Plan plan;

	@OneToMany(mappedBy = "userPlan")
	private Set<Device> devices;

	
	
	//Getters & Setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public Set<Device> getDevices() {
		return devices;
	}

	public void setDevices(Set<Device> devices) {
		this.devices = devices;
	}

	
	
	//Constructor(s)
	
	public UserPlan() {
		super();
	}

}
