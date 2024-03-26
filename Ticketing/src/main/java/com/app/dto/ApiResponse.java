package com.app.dto;

import java.time.LocalDateTime;

public class ApiResponse {
	
	private String mesg;
	private LocalDateTime time_stamp;
	public ApiResponse(String mesg) {
		super();
		this.mesg = mesg;
	//	this.time_stamp = time_stamp;
	}
	

}
