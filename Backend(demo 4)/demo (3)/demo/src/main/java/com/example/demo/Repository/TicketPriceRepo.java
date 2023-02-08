package com.example.demo.Repository;

import com.example.demo.Models.TicketPrice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketPriceRepo extends MongoRepository<TicketPrice, String> {
}
