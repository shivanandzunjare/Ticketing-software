package com.app.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.app.entities.User;
import com.app.repository.UserRepository;

import jakarta.transaction.Transactional;


import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	


	@Autowired
	private PasswordEncoder encoder;
	

	@Override
	public String registerUser(User user) {
		User email = userRepo.findByEmail(user.getEmail());
		User contact=userRepo.findByContactno(user.getContactno());
	
		if( email != null) {
			return " email is already exists";
		}
		else if(contact != null) {
			return " contact Number is already exists!";
		}
		user.setPassword(encoder.encode(user.getPassword()));
		User userfinal= userRepo.save(user);
		return " Registratio done successfully";
	}


	@Override
	public List<User> getAllusers() {
//		User user = new User();
//		
//		User user1 = userRepo.findByLoginid(user.getEmail());
//		
//		if( user1 != null) {
//			String pswd = encoder.encode(user.getPassword());
//		}
		
		return userRepo.findAll();
	}
	
	 @Override 
	 public String  deleteUserById(Long id) { // User
	   //User     res =userRepo.findByLoginId(loginId);
	     String mesg=" invalid LoginId";
	     if(userRepo.existsById(id))
		     userRepo.deleteById(id);;
	         mesg = " user with loginId "+ id + " is deleted"; 
		return mesg;
	  }
	 
	 @Override
	 public User updateUser(User detachedUser) {
		
		return userRepo.save(detachedUser);
	}


	@Override
	public Optional<User> getById(Long id) {
		
		return userRepo.findById(id);
	}
	
	

//	@Override
//	public UserDto registerUser(UserDto userDto) {
//		User user = this.dtoToUser(userDto);
//		User savedUSer = this.userRepo.save(user);
//		return this.userToDto(savedUSer);
//		
//	}
	
//	
//	@Override
//	public UserDto updateUser(UserDto userDto, Long userId) {
//		User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException(" user not found"));
//		user.setFirstName(userDto.getFirstName());
//		user.setPassword(userDto.getPassword());
//		user.setEmail(userDto.getEmail());
//		return null;
//	}
	

//	

	
//	public User dtoToUser( UserDto userDto) {
//		
//		User user = new User();
//		user.setFirstName(userDto.getFirstName());
//		user.setLastName(userDto.getLastName());
//		user.setContactNo(userDto.getContactNo());
//		user.setEmail(userDto.getEmail());
//		user.setUserRole(userDto.getUserRole());
//		user.setLoginid(userDto.getLoginid());
//		user.setPassword(userDto.getPassword());
//		return user;
//		
//	}
//	
//	public UserDto userToDto( User user) {
//		UserDto userDto = new UserDto();
//		userDto.setFirstName(user.getFirstName());
//		userDto.setLastName(user.getLastName());
//		userDto.setContactNo(user.getContactNo());
//		userDto.setEmail(user.getEmail());
//		userDto.setUserRole(user.getUserRole());
//		userDto.setLoginid(user.getLoginid());
//		userDto.setPassword(user.getPassword());
//		return userDto;
//	}
	
}