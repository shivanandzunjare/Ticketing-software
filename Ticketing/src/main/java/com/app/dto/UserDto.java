package com.app.dto;

import com.app.entities.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@ToString
public class UserDto {


	private String firstName;
	
	private String lastName;
	private UserRole userRole;
	private String contactNo;
	private String email;	

	private String password;
	
	private String loginid;
}
