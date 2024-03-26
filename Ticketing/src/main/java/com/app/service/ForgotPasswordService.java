package com.app.service;

import com.app.entities.User;

public interface ForgotPasswordService {
	
	String resetPassword(User user);

}
