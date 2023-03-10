package com.example.demo.Services;

import com.example.demo.Models.Bus;
import com.example.demo.Models.User;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {
    @Autowired
    private UserRepo userRepository;

    public User createUser(User user) {

        return userRepository.save(user);
    }

    public Optional<User> getUserById(String id) {

        return userRepository.findById(id);
    }

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public void deleteUser(String id) {

        userRepository.deleteById(id);
    }

    public User updateUser(String id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setEmailId(user.getEmailId());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setPassword(user.getPassword());
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }
}



