package com.ems.EmployeeManagementSystem.mapper;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;
import com.ems.EmployeeManagementSystem.entity.Employee;

/*
 * Mapper class
 * Converts Employee Entity to EmployeeDto
 * and EmployeeDto back to Employee Entity.
 */
public class EmployeeMapper {

    /*
     * Converts Employee Entity into EmployeeDto.
     * Used when sending employee data to the frontend.
     */
    public static EmployeeDto mapToEmployeeDto(Employee employee){

        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    /*
     * Converts EmployeeDto into Employee Entity.
     * Used before saving employee data to the database.
     */
    public static Employee mapToEmployee(EmployeeDto employeeDto){

        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}