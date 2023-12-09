package com.vothanhtrong.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.Category;
public interface CategoryRepository extends JpaRepository<Category, Long>{
    
    List<Category> findByNameContainingIgnoreCase(String name);
    
}

