package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Company;
import com.example.demo.entity.CompanyHelper;
import com.example.demo.entity.LoginHelper;
import com.example.demo.entity.User;
import com.example.demo.service.CompanyService;
import com.example.demo.service.UserService;

//This is User Controller


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService userserv;
	
	@Autowired
	CompanyService companyserv;
	
	
	@GetMapping("/getUsers")
	public List<User> getUsers() {
		return userserv.getAllUser();
	}
	
	@PostMapping("/registerCustomer")
	public User saveCustomer(@RequestBody CompanyHelper comp) {
		
		User u = new User();
		u.setEmail(comp.getEmail());
		u.setName(comp.getName());
		u.setPassword(comp.getPassword());
		u.setCity(comp.getCity());
		u.setAddress(comp.getAddress());
		u.setPancard(comp.getPancard());
		u.setRole_id(comp.getRole_id());
		return userserv.insertCustomer(u);	
	}
	
	
	@PostMapping("/registerCompany")
	public Company saveCompany(@RequestBody CompanyHelper comp) {
		User u = new User();
		u.setEmail(comp.getEmail());
		u.setName(comp.getName());
		u.setPassword(comp.getPassword());
		u.setCity(comp.getCity());
		u.setAddress(comp.getAddress());
		u.setPancard(comp.getPancard());
		u.setRole_id(comp.getRole_id());
		userserv.insertCustomer(u);
		Company c = new Company();
		c.setMsme_cert_no(comp.getMsme_cert_no());
		c.setGst_no(comp.getGst_no());
		c.setUser_id(u);
		return companyserv.saveComp(c);
		
	}
	
	@PostMapping("/login")
	public User login(@RequestBody LoginHelper lhelp) {
		System.out.println("hi");
		System.out.println(lhelp);
		return userserv.loginCheck(lhelp);
	}
}
