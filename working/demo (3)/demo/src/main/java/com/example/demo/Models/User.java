package com.example.demo.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    @Indexed(unique = true)
    private String emailId;
    private String phoneNumber;
    private String password;
}
