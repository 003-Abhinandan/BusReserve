package com.example.demo.Services;

import com.example.demo.Models.User;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);
        CustomUserDetails userDetails=null;
        if ((user!=null)){
            userDetails = new CustomUserDetails();
            userDetails.setUser(user);
        }
        else {
            throw new UsernameNotFoundException("User does not exists with: "+ email);
        }
        return userDetails;
    }
}
