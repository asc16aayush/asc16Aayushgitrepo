package com.example.caps_project.repository;

import com.example.caps_project.entity.admin_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface admin_repository extends JpaRepository<admin_entity,String> {
    // Custom query to get the maximum authorId (based on numeric value)
    @Query("SELECT MAX(a.aId) FROM admin_entity a")
    String getMaxaId();
}
