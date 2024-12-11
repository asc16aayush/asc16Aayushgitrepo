package com.example.caps_project.service;

import com.example.caps_project.entity.course_entity;
import com.example.caps_project.repository.course_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Optional;

@Service
public class course_service {

    @Autowired
    private course_repository courseRepository;

    // Create or Update a course
    public course_entity saveCourse(course_entity course) {
        if (course.getCourseId() == null || course.getCourseId().isEmpty()) {

            course.setCourseId(generateCourseId());
        }
        return courseRepository.save(course);
    }

    // Get course by ID
    public Optional<course_entity> getCourseById(String courseId) {
        return courseRepository.findById(courseId);
    }

    // Get all courses
    public Iterable<course_entity> getAllCourses() {
        return courseRepository.findAll();
    }

    // Delete a course by ID
    public void deleteCourse(String courseId) {
        courseRepository.deleteById(courseId);
    }

    // Check if course exists by ID
    public boolean existsById(String courseId) {
        return courseRepository.existsById(courseId);
    }


    private String generateCourseId() {

        Optional<course_entity> lastCourse = courseRepository.findTopByOrderByCourseIdDesc();

        if (lastCourse.isPresent()) {
            String lastCourseId = lastCourse.get().getCourseId();

            int lastNumber = Integer.parseInt(lastCourseId.substring(1));

            int newNumber = lastNumber + 1;

            return "C" + new DecimalFormat("0000").format(newNumber);
        } else {

            return "C0001";
        }
    }
}