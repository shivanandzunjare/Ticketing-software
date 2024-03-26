package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.IssueRequestDto;
import com.app.entities.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long>{
	
	boolean existsById( Long id);

	Issue save(IssueRequestDto issue);
	
	List<Issue> findByDummy( String dummy);
	
	List<Issue> findByTicketno(String ticketno);
	
	
	

}
