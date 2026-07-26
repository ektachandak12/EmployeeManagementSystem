package com.ems.EmployeeManagementSystem.service;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto addEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long EmployeeId);

}
