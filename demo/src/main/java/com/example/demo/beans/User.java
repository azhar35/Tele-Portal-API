package com.example.demo.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class User {
	
	//Fields
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;

	@Column(unique = true)
	@NotBlank
	private String username;

	@NotBlank
	private String password;
	
	@OneToMany(mappedBy = "user")
	private Set<UserPlan> userPlan;

	

	//Getters & Setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<UserPlan> getUserPlan() {
		return userPlan;
	}

	public void setUserPlan(Set<UserPlan> userPlan) {
		this.userPlan = userPlan;
	}
	
	//Constructor(s)
	
	public User() {
		super();
	}

}
