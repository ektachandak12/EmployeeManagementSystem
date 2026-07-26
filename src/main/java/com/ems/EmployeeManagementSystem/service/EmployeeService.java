package com.ems.EmployeeManagementSystem.service;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;

import java.util.List;

/*
 * Service interface that defines all business operations
 * related to employee management.
 */
public interface EmployeeService {

    // Adds a new employee and returns the saved employee details.
    EmployeeDto addEmployee(EmployeeDto employeeDto);

    // Retrieves an employee using their unique ID.
    EmployeeDto getEmployeeById(Long EmployeeId);

    // Returns a list of all employees.
    List<EmployeeDto> getAllEmployees();

    // Updates an existing employee's details.
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployeeDto);

    // Deletes an employee using their ID.
    void deleteEmployee(Long employeeId);

}