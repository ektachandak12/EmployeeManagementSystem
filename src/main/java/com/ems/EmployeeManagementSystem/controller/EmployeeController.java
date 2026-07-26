package com.ems.EmployeeManagementSystem.controller;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;
import com.ems.EmployeeManagementSystem.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 * This class performs all REST API operations related to employees.
 * It receives HTTP requests from the client, extracts the required data,
 * calls the Service layer to perform business logic, and returns the
 * appropriate HTTP response.
 */
@AllArgsConstructor          // Generates a constructor for dependency injection.
@RestController              // Marks this class as a REST Controller.
@RequestMapping("/api/employees") // Base URL for all employee-related APIs.
public class EmployeeController {

    // Service object used to perform employee-related business operations.
    private EmployeeService employeeService;

    // ==================== CREATE ====================

    // REST API to add a new employee.
    @PostMapping
    // @RequestBody reads the JSON data sent in the request body
    // and converts it into an EmployeeDto object.
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){

        // Call the service layer to save the employee.
        EmployeeDto savedEmployee = employeeService.addEmployee(employeeDto);

        // Return the saved employee with HTTP Status 201 (Created).
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // ==================== READ ====================

    // REST API to retrieve an employee by ID.
    @GetMapping("{id}")
    // @PathVariable extracts the "id" value from the URL
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long EmployeeId){

        // Fetch employee details from the service layer.
        EmployeeDto employeeDto = employeeService.getEmployeeById(EmployeeId);

        // Return employee details with HTTP Status 200 (OK).
        return new ResponseEntity<>(employeeDto, HttpStatus.OK);

    }

    // REST API to retrieve all employees.
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){

        // Fetch all employees from the service layer.
        List<EmployeeDto> employees = employeeService.getAllEmployees();

        // Return the employee list with HTTP Status 200 (OK).
        return ResponseEntity.ok(employees);
    }

    // ==================== UPDATE ====================

    // REST API to update an existing employee.
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updatedEmployeeDto){

        // Update employee details using the service layer.
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployeeDto);

        // Return the updated employee with HTTP Status 200 (OK).
        return ResponseEntity.ok(employeeDto);
    }

    // ==================== DELETE ====================

    // REST API to delete an employee by ID.
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){

        // Delete the employee from the database.
        employeeService.deleteEmployee(employeeId);

        // Return a success message with HTTP Status 200 (OK).
        return ResponseEntity.ok("Employee deleted successfully");

    }

}