package com.app.repository;


import java.lang.String;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;
public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail (String email);
	
	User findByLoginid(String loginid);
	
	//User findById (Long id);
	
	User findByContactno( String contactno);
	
	boolean existsByLoginid( String loginid);
	
	User deleteByLoginid( String loginid);
	

}
