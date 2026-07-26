package com.ems.EmployeeManagementSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
 * DTO (Data Transfer Object)
 * Used to transfer employee data between
 * backend and frontend without exposing
 * the actual Entity class.
 */

@Getter                 // Generates getters for all fields
@Setter                 // Generates setters for all fields
@NoArgsConstructor      // Generates default constructor
@AllArgsConstructor     // Generates constructor with all fields
public class EmployeeDto {

    // Employee ID
    private Long id;

    // Employee first name
    private String firstName;

    // Employee last name
    private String lastName;

    // Employee email
    private String email;
}