package com.vothanhtrong.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vothanhtrong.backend.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
