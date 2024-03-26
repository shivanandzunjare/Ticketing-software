package com.app.custom_exception;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException{

	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}
	
	
//	String resourceName;
//	String fieldName;
//	long fieldvalue;
//	
//	public ResourceNotFoundException(String resourceName, String fieldName, long fieldvalue) {
//		super(String.format(fieldName, getStackTrace()));
//		this.resourceName = resourceName;
//		this.fieldName = fieldName;
//		this.fieldvalue = fieldvalue;
//	}

}
