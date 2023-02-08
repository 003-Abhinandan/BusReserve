package com.example.demo.Controller;

import com.example.demo.Models.User;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secure/rest")
public class AdminController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping("/admin/add")
    public String addUserByAdmin(User user){

        String pwd = user.getPassword();
        String encryptpwd = passwordEncoder.encode(pwd);
        user.setPassword(encryptpwd);

        userRepo.save(user);
        return  "User added successfully";
    }


}
