package com.app.dto;

import com.app.entities.IssueType;

import com.app.entities.User;



public class IssueRequestDto {
	

	private IssueType issuetype;
	

	private String issuedesc;
	

	private User loginid;

	private String dummy;

	public IssueType getIssuetype() {
		return issuetype;
	}

	public void setIssuetype(IssueType issuetype) {
		this.issuetype = issuetype;
	}

	public String getIssuedesc() {
		return issuedesc;
	}

	public void setIssuedesc(String issuedesc) {
		this.issuedesc = issuedesc;
	}

	public User getLoginid() {
		return loginid;
	}

	public void setLoginid(User loginid) {
		this.loginid = loginid;
	}

	public String getDummy() {
		return dummy;
	}

	public void setDummy(String dummy) {
		this.dummy = dummy;
	}
	
	
	


	
	
	
	

}
