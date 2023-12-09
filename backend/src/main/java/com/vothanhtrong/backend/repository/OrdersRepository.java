package com.vothanhtrong.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.Orders;
public interface OrdersRepository extends JpaRepository<Orders, Long>{
    
}

