//package com.app.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.dto.ApiResponse;
//import com.app.entities.User;
//import com.app.service.LoginService;
//import com.app.service.UserService;
//
//@RestController
//@RequestMapping("/api/admin")
//@CrossOrigin(origins="*")
//public class AdminController {
//	
//	@Autowired
//	private UserService userService;
//	
//	public AdminController() {
//		System.out.println(" in Admin controller " + getClass());
//	}
//	
//	
//	

//	

//	
//	@DeleteMapping("/{login_Id}")
//	public ApiResponse deleteUserByLogin_id(@PathVariable String loginid) {
//		//ApiResponse response = userService.deleteUserByLogin_id(long_id);
//		return new ApiResponse(userService.deleteUserByLoginid(loginid));
//		}
//}
