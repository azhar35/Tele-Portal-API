package com.example.demo.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "*")
public class SecurityController {
	
	
	@GetMapping("/auth")
	public String login(){
		return "authenticated successfully!" ;
	}
}
