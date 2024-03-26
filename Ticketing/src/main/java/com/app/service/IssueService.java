package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.IssueRequestDto;
import com.app.entities.Issue;

public interface IssueService {
	
	Issue saveIssue( Issue issue, String loginid);
	
	List<Issue> getAllIssue();
	
	List<Issue> getIssueByTicketno(String ticketno);
	
    Optional<Issue> getById(Long id);
    
    List<Issue> getByDummy( String dummy);
	
	Issue updateIssue( Issue issue);
	
	String deleteIssueById(Long id);
	
	

}
