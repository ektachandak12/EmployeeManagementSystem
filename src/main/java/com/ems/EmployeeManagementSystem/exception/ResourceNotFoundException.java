package com.ems.EmployeeManagementSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
 * This class defines a custom exception that is thrown when
 * the requested employee or resource is not found in the database.
 * It returns an HTTP 404 (Not Found) response to the client.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND) // Returns HTTP 404 when this exception is thrown.
public class ResourceNotFoundException extends RuntimeException {

    // Creates a custom exception with the specified error message.
    public ResourceNotFoundException(String message) {

        // Passes the error message to the parent RuntimeException class.
        super(message);
    }

}