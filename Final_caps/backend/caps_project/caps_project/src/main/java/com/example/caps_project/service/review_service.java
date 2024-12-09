package com.example.caps_project.service;

import com.example.caps_project.entity.review_entity;
import com.example.caps_project.repository.review_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class review_service {

    @Autowired
    private review_repository reviewRepository;

    // Create or Update a review
    public review_entity saveReview(review_entity review) {
        // Generate a new rId if it's not provided
        if (review.getrId() == null || review.getrId().isEmpty()) {
            String newRId = generateNewRId();
            review.setrId(newRId);
        }
        return reviewRepository.save(review);
    }

    // Get review by ID
    public Optional<review_entity> getReviewById(String rId) {
        return reviewRepository.findById(rId);
    }

    // Get all reviews
    public Iterable<review_entity> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Delete a review by ID
    public void deleteReview(String rId) {
        reviewRepository.deleteById(rId);
    }

    // Check if review exists by ID
    public boolean existsById(String rId) {
        return reviewRepository.existsById(rId);
    }

    // Generate a new R_ID in the format "R0001", "R0002", ...
    private String generateNewRId() {
        // Get the latest R_ID from the database
        String latestRId = reviewRepository.findTopByOrderByRIdDesc().map(review_entity::getrId).orElse("R0000");

        // Extract the numeric part and increment it
        int numericPart = Integer.parseInt(latestRId.substring(1)); // Get the numeric part (e.g., "0001" -> 1)
        numericPart++; // Increment the number

        // Format the new R_ID with leading zeros
        return String.format("R%04d", numericPart);
    }
}
