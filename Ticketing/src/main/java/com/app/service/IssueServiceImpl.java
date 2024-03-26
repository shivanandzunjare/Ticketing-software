package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.IssueRequestDto;
import com.app.entities.Issue;
import com.app.repository.IssueRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class IssueServiceImpl implements IssueService{
	
	@Autowired
	private IssueRepository issueRepo;

	@Override
	public Issue saveIssue(Issue issue, String loginid) {
		
		return issueRepo.save(issue);
	}

	@Override
	public List<Issue> getAllIssue() {
		
		return issueRepo.findAll();
	}

	@Override
	public String deleteIssueById(Long id) {
		String mesg = " Invalid issueId";
		if( issueRepo.existsById(id))
			issueRepo.deleteById(id);
		mesg = " Issue is " + id + " deleted    ";
		return mesg;
	}

	@Override
	public Issue updateIssue(Issue issue) {
		// TODO Auto-generated method stub
		return issueRepo.save(issue);
	}

	@Override
	public Optional<Issue> getById(Long id) {
		// TODO Auto-generated method stub
		return issueRepo.findById(id);
	}

	@Override
	public List<Issue> getByDummy(String dummy) {
		// TODO Auto-generated method stub
		return (List<Issue>) issueRepo.findByDummy(dummy);
	}

	@Override
	public List<Issue> getIssueByTicketno(String ticketno) {
		// TODO Auto-generated method stub
		return (List<Issue>) issueRepo.findByTicketno(ticketno);
	}
	
	

}
