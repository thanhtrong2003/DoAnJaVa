package com.vothanhtrong.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.Feedback;
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{
    
}

