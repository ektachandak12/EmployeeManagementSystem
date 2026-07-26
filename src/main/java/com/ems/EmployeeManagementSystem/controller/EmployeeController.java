package com.ems.EmployeeManagementSystem.controller;

import com.ems.EmployeeManagementSystem.dto.EmployeeDto;
import com.ems.EmployeeManagementSystem.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.addEmployee(employeeDto);

        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Build Get Employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long EmployeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(EmployeeId);

        return new ResponseEntity<>(employeeDto, HttpStatus.OK);

    }


}
