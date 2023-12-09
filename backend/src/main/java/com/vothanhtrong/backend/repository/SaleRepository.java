package com.vothanhtrong.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vothanhtrong.backend.entity.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    List<Sale> findAllByOrderBySaleDateDesc();
}