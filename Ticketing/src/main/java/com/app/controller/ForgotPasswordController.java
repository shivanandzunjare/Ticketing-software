//package com.app.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.entities.User;
//import com.app.service.ForgotPasswordService;
//
//@RestController
//@RequestMapping("/forgotpassword")
//@CrossOrigin( origins= "*")
//public class ForgotPasswordController {
//	
//	@Autowired
//	private ForgotPasswordService forgotService;
//	
//	@PostMapping("/reset")
//	
//	public String  forgotPassword (@RequestBody User user ) {
//		return forgotService.resetPassword(user);
//	}
//
//}
