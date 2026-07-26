package com.ems.EmployeeManagementSystem.service;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;
import com.ems.EmployeeManagementSystem.entity.Employee;
import com.ems.EmployeeManagementSystem.exception.ResourceNotFoundException;
import com.ems.EmployeeManagementSystem.mapper.EmployeeMapper;
import com.ems.EmployeeManagementSystem.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/*
 * Service implementation that contains the business logic for employee management.
 * It acts as a bridge between the Controller and Repository layers.
 * - Receives requests from the controller.
 * - Converts DTOs to Entities and vice versa using EmployeeMapper.
 * - Performs database operations using EmployeeRepository.
 * - Throws custom exceptions when an employee is not found.
 */
@Service                      // Marks this class as a Spring Service component.
@AllArgsConstructor           // Generates a constructor for dependency injection.
public class EmployeeServiceImpl implements EmployeeService {

    // Repository used to perform CRUD operations on the Employee table.
    private EmployeeRepository employeeRepository;

    // Adds a new employee to the database.
    @Override
    public EmployeeDto addEmployee(EmployeeDto employeeDto) {

        // Convert DTO received from the client into an Entity.
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        // Save the employee in the database.
        Employee savedEmployee = employeeRepository.save(employee);

        // Convert the saved Entity back to DTO and return it.
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    // Retrieves an employee by their ID.
    @Override
    public EmployeeDto getEmployeeById(Long EmployeeId) {

        // Search for the employee. Throw an exception if not found.
        Employee employee = employeeRepository.findById(EmployeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found!"));

        // Convert Entity to DTO before returning.
        return EmployeeMapper.mapToEmployeeDto(employee);

    }

    // Retrieves all employees from the database.
    @Override
    public List<EmployeeDto> getAllEmployees() {

        // Fetch all employee records.
        List<Employee> employees = employeeRepository.findAll();

        // Convert the list of Entities into a list of DTOs.
        return employees.stream()
                .map(employee -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());

    }

    // Updates an existing employee's details.
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployeeDto) {

        // Find the employee or throw an exception if the ID does not exist.
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with id : " + employeeId + "!")
        );

        // Update only the editable fields.
        employee.setFirstName(updatedEmployeeDto.getFirstName());
        employee.setLastName(updatedEmployeeDto.getLastName());
        employee.setEmail(updatedEmployeeDto.getEmail());

        // Save the updated employee.
        Employee updatedEmployee = employeeRepository.save(employee);

        // Return the updated employee as a DTO.
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    // Deletes an employee using their ID.
    @Override
    public void deleteEmployee(Long employeeId) {

        // Verify that the employee exists before deleting.
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with id : " + employeeId + "!")
        );

        // Delete the employee from the database.
        employeeRepository.deleteById(employeeId);
    }
}