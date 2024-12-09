package com.example.caps_project.service;

import com.example.caps_project.entity.learner_entity;
import com.example.caps_project.repository.learner_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Optional;

@Service
public class learner_service {

    @Autowired
    private learner_repository learnerRepository;

    // Method to generate the next learnerId
    private String generateLearnerId() {
        // Find the learner with the maximum ID (to get the last learner)
        Optional<learner_entity> lastLearner = learnerRepository.findTopByOrderByLearnerIdDesc();

        if (lastLearner.isPresent()) {
            String lastId = lastLearner.get().getLearnerId();
            int nextIdNumber = Integer.parseInt(lastId.substring(1)) + 1;  // Extract the number, increment it
            return "L" + String.format("%04d", nextIdNumber);  // Format it as L0001, L0002, ...
        }
        return "L0001";  // If no learners exist, start with L0001
    }

    // Create or Update a learner
    public learner_entity saveLearner(learner_entity learner) {
        // If the learner doesn't have an ID, generate a new one
        if (learner.getLearnerId() == null || learner.getLearnerId().isEmpty()) {
            learner.setLearnerId(generateLearnerId());
        }
        return learnerRepository.save(learner);
    }

    // Get learner by ID
    public Optional<learner_entity> getLearnerById(String learnerId) {
        return learnerRepository.findById(learnerId);
    }

    // Get all learners
    public Iterable<learner_entity> getAllLearners() {
        return learnerRepository.findAll();
    }

    // Delete a learner by ID
    public void deleteLearner(String learnerId) {
        learnerRepository.deleteById(learnerId);
    }

    // Check if learner exists by ID
    public boolean existsById(String learnerId) {
        return learnerRepository.existsById(learnerId);
    }
}
