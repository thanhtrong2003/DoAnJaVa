package com.vothanhtrong.backend.service;

import java.util.List;

import com.vothanhtrong.backend.dto.UserDto;
import com.vothanhtrong.backend.entity.User;

public interface UserService {
    public  User createUser(User user);
    public  User getUserById(Long userId);
    public  User updateUser( User user);
    public  void deleteUser(Long userId);
    public  List <User> getAllUsers();

    User registerUser(UserDto userDto);
    boolean loginUser(UserDto userDto);
//     public User registerUser(User user);


//     User findByUsername(String username);
//    User save(UserDto userDto);
}



    

