package com.example.demo.Repository;

import com.example.demo.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
    Optional<User> findById(String id);
    User findByemailId(String email);
}
