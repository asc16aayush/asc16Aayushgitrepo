package com.example.caps_project.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "ADMIN")
public class admin_entity {


    @Id
    @Column(name = "A_ID")
    private String aId;

    @Column(name = "NAME", length = 50, nullable = false)
    private String name;

    @Column(name = "EMAIL", length = 50, nullable = false, unique = true)
    private String email;

    @Column(name = "PASSWORD", length = 50, nullable = false)
    private String password;

    @Column(name = "PHONE", length = 15, nullable = false)
    private String phone;

    @Column(name = "created_At")
    private String createdAt;

    // Default constructor
    public admin_entity() {
    }

    // Parameterized constructor
    public admin_entity(String aId, String name, String email, String password, String phone, String createdAt) {
        this.aId = aId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.createdAt = createdAt;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getaId() {
        return aId;
    }

    public void setaId(String aId) {
        this.aId = aId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }


}

