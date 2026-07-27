// Import Axios library.
// Axios is used to send HTTP requests (GET, POST, PUT, DELETE)
// from the React frontend to the Spring Boot backend.
import axios from "axios";


/*
 * EmployeeService
 * ----------------
 * This file acts as a service layer for the Employee Management System.
 *
 * Responsibilities:
 * 1. Communicates with the Spring Boot backend.
 * 2. Sends HTTP requests using Axios.
 * 3. Provides reusable functions for CRUD operations.
 *
 * CRUD Operations:
 * C - Create  -> POST
 * R - Read    -> GET
 * U - Update  -> PUT
 * D - Delete  -> DELETE
 *
 * Instead of writing Axios code in every component,
 * we write it once here and simply call these functions
 * wherever they are needed.
 */


// Base URL of the Spring Boot REST API.
//
// Every API request will start with this URL.
//
// Example:
// GET    http://localhost:8080/api/employees
// POST   http://localhost:8080/api/employees
// PUT    http://localhost:8080/api/employees/5
// DELETE http://localhost:8080/api/employees/5
const REST_API_BASE_URL = "http://localhost:8080/api/employees";


/*
 * Fetch All Employees
 * --------------------
 * Sends a GET request to the backend.
 *
 * URL:
 * GET http://localhost:8080/api/employees
 *
 * Returns:
 * List of all employees.
 */
export const listEmployees = () => axios.get(REST_API_BASE_URL);


/*
 * Create Employee
 * ----------------
 * Sends a POST request to the backend.
 *
 * Parameters:
 * employee -> JavaScript object containing
 *             firstName, lastName and email.
 *
 * URL:
 * POST http://localhost:8080/api/employees
 *
 * Request Body:
 * {
 *   firstName: "...",
 *   lastName: "...",
 *   email: "..."
 * }
 */
export const createEmployee = (employee) =>
    axios.post(REST_API_BASE_URL, employee);


/*
 * Get Employee By ID
 * -------------------
 * Sends a GET request for a specific employee.
 *
 * Parameter:
 * employeeId -> ID of the employee.
 *
 * Example:
 * employeeId = 5
 *
 * URL:
 * GET http://localhost:8080/api/employees/5
 */
export const getEmployee = (employeeId) =>
    axios.get(REST_API_BASE_URL + '/' + employeeId);


/*
 * Update Employee
 * ----------------
 * Sends a PUT request to update an existing employee.
 *
 * Parameters:
 * employeeId -> ID of the employee.
 * employee   -> Updated employee details.
 *
 * Example:
 * PUT http://localhost:8080/api/employees/5
 */
export const updateEmployee = (employeeId, employee) =>
    axios.put(REST_API_BASE_URL + '/' + employeeId, employee);


/*
 * Delete Employee
 * ----------------
 * Sends a DELETE request to remove an employee.
 *
 * Parameter:
 * employeeId -> ID of the employee to delete.
 *
 * Example:
 * DELETE http://localhost:8080/api/employees/5
 */
export const deleteEmployee = (employeeId) =>
    axios.delete(REST_API_BASE_URL + '/' + employeeId);