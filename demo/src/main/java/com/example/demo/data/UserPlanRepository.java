package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.beans.UserPlan;

public interface UserPlanRepository extends JpaRepository<UserPlan, Integer> {

}
