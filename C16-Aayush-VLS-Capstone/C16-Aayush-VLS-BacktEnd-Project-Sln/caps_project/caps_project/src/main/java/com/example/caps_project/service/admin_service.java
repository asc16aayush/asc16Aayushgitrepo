
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


    public boolean existsById(String aId) {
        return adminRepository.existsById(aId);
    }


    private String generateaId() {

        String maxId = adminRepository.getMaxaId();


        if (maxId == null) {
            return "AD001";
        }


        int nextId = Integer.parseInt(maxId.substring(2)) + 1;


        return String.format("AD%03d", nextId);
    }
}
