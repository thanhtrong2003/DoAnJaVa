package com.vothanhtrong.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vothanhtrong.backend.entity.Role;
public interface RoleRepository extends JpaRepository<Role, Long>{
    
}

