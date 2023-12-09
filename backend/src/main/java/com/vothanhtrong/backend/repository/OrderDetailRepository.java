package com.vothanhtrong.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.OrderDetail;
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long>{
    
}

