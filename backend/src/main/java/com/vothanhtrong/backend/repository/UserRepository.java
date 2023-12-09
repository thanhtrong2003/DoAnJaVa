package com.vothanhtrong.backend.repository;
//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.User;
public interface UserRepository extends JpaRepository<User, Long>{
    User findByUsername(String username);



}

