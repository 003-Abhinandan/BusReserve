package com.example.demo.Models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "roles")
@NoArgsConstructor
public class Role {
    @Id
    private String id;
    private String role;
}
