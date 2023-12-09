package com.vothanhtrong.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vothanhtrong.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByTitleAndCategoryId(String title, Long category);

    List<Product> findByTitle(String title);

    List<Product> findByCategoryId(Long category);

    Page<Product> findAll(Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId ORDER BY p.create_at DESC")
    List<Product> findLatestProductsInCategory(Long categoryId, Pageable pageable);
    
    Page<Product> findProductsByCategoryId(Long categoryId, Pageable pageable);
}
