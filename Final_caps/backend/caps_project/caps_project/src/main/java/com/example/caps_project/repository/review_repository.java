package com.example.caps_project.repository;

import com.example.caps_project.entity.review_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface review_repository extends JpaRepository<review_entity, String> {
    // Changed to String for R_ID
    // Custom query to get the latest review by rId
    Optional<review_entity> findTopByOrderByRIdDesc();
}