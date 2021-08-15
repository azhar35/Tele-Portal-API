package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.beans.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUsername(String name);
}
