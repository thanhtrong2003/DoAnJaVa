package com.vothanhtrong.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.Token;
public interface TokenRepository extends JpaRepository<Token, Long>{
    
}

