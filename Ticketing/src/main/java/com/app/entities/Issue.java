package com.app.entities;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="issue")
public class Issue extends BaseEntity {
	

	
	@Column( name ="issuetype")
	@Enumerated(EnumType.STRING)
	private IssueType issuetype;
	
	@Column( name ="issuedesc")
	private String issuedesc;
	
	@OneToOne
	@JoinColumn( name ="loginid")
	private User user;
	
	@Column(name = "dummy")
	private String dummy;
	
	@Column(name ="statusmark" )
	private String statusmark;
	
	@Column(name ="ticketNo")
	private String ticketno;
	
	
	@Column(name ="ticketDate")
	@DateTimeFormat
	private LocalDate ticketdate;

	public Issue ( IssueType issuetype) {
		this.issuetype = issuetype;
	}

	

	public Issue(Long id) {
		super(id);
		// TODO Auto-generated constructor stub
	}
	
}
