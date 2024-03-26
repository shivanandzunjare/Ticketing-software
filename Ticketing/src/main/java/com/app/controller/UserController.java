package com.app.controller;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiRequest;
import com.app.dto.UserDto;
import com.app.entities.User;
import com.app.service.ForgotPasswordService;
import com.app.service.LoginService;

import com.app.service.UserService;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins= "*")
public class UserController {
	
	@Autowired
	private ForgotPasswordService forgotService;
	
	@Autowired
	private LoginService loginser;
	
	@Autowired
	private UserService userservice;
	
	
	public UserController() {
		System.out.println(" in user Controller " + getClass());
	}
	
	@PostMapping("/signUp")
	public ResponseEntity<?> addNewUser(@RequestBody User user){
		System.out.println(" in add new user" + user);
		return ResponseEntity.status(200).body(userservice.registerUser(user));
		
	}
	

	@PostMapping("/signIn")
	public User authenticateUser(@RequestBody User user) {
		return loginser.authenticate(user);
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser(){
		return userservice.getAllusers();	
	}
	
	
	
	@DeleteMapping("/del/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		return new ResponseEntity<> (userservice.deleteUserById(id), HttpStatus.OK);
	}
	
	
	@PutMapping("/update")
	public User updateUserDetails( @RequestBody User detachedUsers) {
		return userservice.updateUser(detachedUsers);
	}
	
	@GetMapping("/getById/{id}")
	public Optional<User> getUserById(@PathVariable Long id) {
		return userservice.getById(id);	
	}

	
	@PostMapping("/reset")
	public String  forgotPassword (@RequestBody User user ) {
		return forgotService.resetPassword(user);
	}
	
	
//	@PostMapping("/signIn")
//	public ResponseEntity<?> signIn( @RequestBody ApiRequest apirequest){
//		String loginid= apirequest.getLoginid();
//		String password = apirequest.getPassword();
//		return ResponseEntity.ok("loghin success");
//	}
	
//	@PostMapping("/signIn")
//	public ResponseEntity<?> authenticateUser(@RequestParam("loginid") String loginid, @RequestParam("password") String password) {
//		
//		if( loginser.authenticate(loginid, password)) {
//			return ResponseEntity.ok("signIn success");
//		}
//		else {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid");
//		}
//	}
//	
}
