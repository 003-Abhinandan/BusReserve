package com.example.demo.Repository;

import com.example.demo.Models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends MongoRepository<Role, String> {
}
