package com.example.demo.Services;

import com.example.demo.Models.Bus;
import com.example.demo.Models.Ticket;
import com.example.demo.Repository.BusRepo;
import com.example.demo.Repository.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepo ticketRepo;


    public List<Ticket> getAllTickets(){
        return ticketRepo.findAll();
    }

    public String bookTicket(Ticket ticket){
        ticketRepo.save(ticket);
        return "Ticket booked successfully";
    }

    public Optional<Ticket> findTicketById(String id) {
        return ticketRepo.findById(id);
    }

    public String deleteTicket(String id) {
        ticketRepo.deleteById(id);
        return "Ticket of id "+ id + " deleted successfully";
    }
}
