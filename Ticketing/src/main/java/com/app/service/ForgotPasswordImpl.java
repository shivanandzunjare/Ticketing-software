package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ForgotPasswordImpl implements ForgotPasswordService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passEncoder;
	
	@Override
	public String resetPassword(User user) {
	User user1= userRepository.findByEmail(user.getEmail());
	User user2 = userRepository.findByLoginid(user.getLoginid());
	
	
	if( user1 != null && user2 != null) {
		
		String passwd= passEncoder.encode(user.getPassword());
		user1.setPassword(passwd);
		User updateUser= userRepository.save(user1);
		
		if( updateUser != null)
			return " Password gets updated ";
		
	}
		return " Invalid Password !!!";
	}

}
