package com.app.service;
import java.util.Optional;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.repository.UserRepository;

import jakarta.transaction.Transactional;

@Configuration
@Service
@Transactional
public class LoginServiceImpl implements LoginService {
	

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	@Autowired
	private UserRepository userRepo;
	//everyone can login with login_id , password

	@Override
	public User authenticate(User user) {
		Optional<User> opUser = Optional.ofNullable(userRepo.findByLoginid(user.getLoginid()));
		User dbUser = opUser.get();

		if (opUser.isPresent()) {

			if (bCryptPasswordEncoder.matches(user.getPassword(), dbUser.getPassword()))
				//return "Successfully logged in!";
				return dbUser;
			else
				//return "Wrong password, please try again.";
				return null;
		}
		//return "Customer is not registered yet !!";
		return null;
	}
	
	
//	@Override
//	public User authenticate (String loginid, String password) {
//		
//		User user = userRepo.findByLoginid(loginid);
//		if( user != null && user.getPassword().equals(password)) {
//			return true; //if successfull
//		}
//		return false;  // authentication failed
//		
//		
//	}
	
	

	
	
}
