package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.entities.Issue;
import com.app.service.IssueService;

@RestController
@RequestMapping("/api/issue")
@CrossOrigin(origins = "*")

public class IssueController {
	
	@Autowired 
	private IssueService issueSer;
	
	@PostMapping("/{loginid}/")
	public ResponseEntity<?> saveIssue(@RequestBody Issue issue, @PathVariable String loginid) {
	  Issue problem = issueSer.saveIssue(issue,loginid);
	  
	  if( problem != null) {
		  return ResponseEntity.status(201).body(issue);
	  }
	  else {
		  return ResponseEntity.status(500).body("error");
	  }
	  
	}
	
	@GetMapping("/getAllIssue")
	public List<Issue>  getIssueList(){
		return issueSer.getAllIssue();
	}
	
	@GetMapping("/getById/{id}")
	public Optional<Issue> getIssueById(@PathVariable Long id) {
		return issueSer.getById(id);
	}
	
	@GetMapping("/getByDummy/{dummy}")
	public List<Issue> getIssueByDummy(@PathVariable String dummy) {
		return issueSer.getByDummy(dummy);
	}
	
	@GetMapping("/getByTicketno/{ticketno}")
	public List<Issue> getByTicketNo(@PathVariable String ticketno){
		return issueSer.getIssueByTicketno(ticketno);
	}
	
	
	
	@PutMapping("/update")
	public Issue updateIssueDetails( @RequestBody Issue detachedIssue ) {
		return issueSer.updateIssue(detachedIssue);
	}
	
	@DeleteMapping("/del/{id}")
	
	public ResponseEntity<?> deleteIssueById(@PathVariable Long id) {
		return new ResponseEntity<>(issueSer.deleteIssueById(id), HttpStatus.OK);
	}

}
