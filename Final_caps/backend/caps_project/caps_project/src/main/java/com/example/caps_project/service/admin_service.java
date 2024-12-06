
package com.example.caps_project.service;

import com.example.caps_project.entity.admin_entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.caps_project.repository.admin_repository;

import java.util.Optional;

@Service
public class admin_service {

    @Autowired
    private admin_repository adminRepository;

    // Create or Update an admin
    public admin_entity saveAdmin(admin_entity admin) {
        // If authorId is not provided, generate a new one
        if (admin.getaId() == null || admin.getaId().isEmpty()) {
            admin.setaId(generateaId());
        }
        return adminRepository.save(admin);
    }

    // Get admin by ID
    public Optional<admin_entity> getAdminById(String aId) {
        return adminRepository.findById(aId);
    }

    // Get all admins
    public Iterable<admin_entity> getAllAdmins() {
        return adminRepository.findAll();
    }

    // Delete an admin by ID
    public void deleteAdmin(String aId) {
        adminRepository.deleteById(aId);
    }

    // Check if admin exists by ID
    public boolean existsById(String aId) {
        return adminRepository.existsById(aId);
    }

    // Method to generate a new authorId in the format A0001, A0002, ...
    private String generateaId() {
        // Get the highest current authorId from the database
        String maxId = adminRepository.getMaxaId();  // Assuming this method is implemented in your repository

        // If no authors exist, start with A0001
        if (maxId == null) {
            return "AD001";
        }

        // Extract the numeric part of the authorId (e.g., "A0001" -> 1)
        int nextId = Integer.parseInt(maxId.substring(1)) + 1;

        // Format the nextId into the A0001 format
        return String.format("AD%04d", nextId);
    }
}
