package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.UserDto;
import com.app.entities.User;

public interface UserService {
	
	String registerUser( User user);
	
	List<User> getAllusers();
	
	 String deleteUserById(Long  id);
	 
	 User updateUser(User user);
	 
	 Optional<User> getById( Long id);

//	  UserDto registerUser(UserDto user);
//	  
     
	
      

	
	

}
