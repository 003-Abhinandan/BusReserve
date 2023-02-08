package com.example.demo.Repository;

import com.example.demo.Models.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepo extends MongoRepository<Ticket, String> {
    List<Ticket> findTicketByFirstName(String firstname);
}
