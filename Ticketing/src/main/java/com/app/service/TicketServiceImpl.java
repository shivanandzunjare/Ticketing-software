//package com.app.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.app.entities.Ticket;
//import com.app.repository.TicketRepository;
//
//import jakarta.transaction.Transactional;
//
//@Service
//@Transactional
//public class TicketServiceImpl implements TicketService {
//
//	@Autowired
//	private TicketRepository tktrepo;
//	
//	@Override
//	public Ticket generateTicket(Ticket tkt, String loginId) {
//		tktrepo.save(tkt);
//		
//		return null;
//		
//	}
//
//	@Override
//	public List<Ticket> getAllTicketing() {
//		return tktrepo.findAll();
//	
//	}
//
////	public String  deleteTKT(Integer num) {
////	  
////	  return;
////	}
//
//	@Override
//	public String deleteTicketNo(Integer num) {
//		String mesg = " invalid TicketNumber !!!";
//		  if( tktrepo.existsByTicketNo(num))
//			  tktrepo.deleteByTicketNo(num);
//		  mesg = " ticket number is " + num +" is deleted ";
//		return  mesg;
//	}
//
//}
