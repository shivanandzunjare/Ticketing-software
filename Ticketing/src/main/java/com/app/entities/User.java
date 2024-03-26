package com.app.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter                                  //name, mobileNo,role, companyname,email,login_id,passwd
@ToString
@Entity
@Table(name=" user")

public class User extends BaseEntity{

	@Column(name="firstname")
	private String fname;
	
	@Column( name="lastname")
	private String lname;
	
	@Column( name ="email")
	private String email;
	
	@Column(name =" contactno")
	private String contactno;
	
	@Column ( name ="loginid")
	private String loginid;
	
	@Column( name =" userrole")
	@Enumerated( EnumType.STRING)
	private UserRole userrole;
	
	@Column( name =" password")
	@JsonProperty(access= Access.WRITE_ONLY)
	private String password;
	
//	@OneToOne (mappedBy =  "user")
//	private Issue issue;
	
	public User( String loginid, String password) {
		this.loginid= loginid;
		this.password= password;
	}
	
	



	public User( UserRole userroles) {
		this.userrole =  userroles;
	}

	public User(String loginid) {
		
		this.loginid = loginid;
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}

	public User(Long id2, String fname, String lname, String email, String contactno, String loginid, UserRole userrole,
			String password) {
		super(id2);
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contactno = contactno;
		this.loginid = loginid;
		this.userrole = userrole;
		this.password = password;
	}





	public String getLoginid() {
		// TODO Auto-generated method stub
		return null;
	}
	



	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setPassword(String passwd) {
		// TODO Auto-generated method stub
		
	}

	public String getContactno() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
