package com.example.demo.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Plan {

	// Fields

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "plan_id")
	private int id;

	@Column(name = "max_devices")
	@NotNull
	private int maxDevices;

	@NotNull
	private double price;

	@JsonIgnore
	@OneToMany(mappedBy = "plan", cascade = CascadeType.ALL)
	private Set<UserPlan> userPlans;

	// Getters & Setters

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getMax_devices() {
		return maxDevices;
	}

	public void setMax_devices(int max_devices) {
		this.maxDevices = max_devices;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	// Constructor(s)

	public Plan() {
		super();
	}

}
