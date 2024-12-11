package com.example.caps_project.service;

import com.example.caps_project.entity.author_entity;
import com.example.caps_project.repository.author_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class author_service {

    @Autowired
    private author_repository authorRepository;

    // Create or Update an author
    public author_entity saveAuthor(author_entity author) {
        if (author.getAuthorId() == null || author.getAuthorId().isEmpty()) {
            author.setAuthorId(generateAuthorId());
        }
        return authorRepository.save(author);
    }

    // Get author by ID
    public Optional<author_entity> getAuthorById(String authorId) {
        return authorRepository.findById(authorId);
    }

    // Get all authors
    public Iterable<author_entity> getAllAuthors() {
        return authorRepository.findAll();
    }

    // Delete an author by ID
    public void deleteAuthor(String authorId) {
        authorRepository.deleteById(authorId);
    }


    public boolean existsById(String authorId) {
        return authorRepository.existsById(authorId);
    }

    private String generateAuthorId() {

        String maxId = authorRepository.getMaxAuthorId();


        if (maxId == null) {
            return "A0001";
        }


        int nextId = Integer.parseInt(maxId.substring(1)) + 1;


        return String.format("A%04d", nextId);
    }
}
