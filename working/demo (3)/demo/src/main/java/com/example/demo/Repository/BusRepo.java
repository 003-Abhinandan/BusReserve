package com.example.demo.Repository;

import com.example.demo.Models.Bus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BusRepo extends MongoRepository<Bus, String> {
    Bus findByBusNumber(String busnumber);
}
