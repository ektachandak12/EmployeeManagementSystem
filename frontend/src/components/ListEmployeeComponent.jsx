// Import React along with two Hooks:
// useState  -> Used to store and update data (state).
// useEffect -> Used to perform actions when the component loads or updates.
import React, { useEffect, useState } from 'react';

// Import useNavigate from React Router.
// It allows us to navigate to different pages programmatically.
import { useNavigate } from "react-router-dom";

// Import service methods that communicate with the backend.
// listEmployees()  -> Fetches all employees.
// deleteEmployee() -> Deletes an employee by ID.
import { listEmployees, deleteEmployee } from "../services/EmployeeService";


/*
 * ListEmployeeComponent
 * ----------------------
 * This component displays all employees in a table.
 *
 * Responsibilities:
 * 1. Fetch all employees from the backend.
 * 2. Display employee details in a Bootstrap table.
 * 3. Navigate to the Add Employee page.
 * 4. Navigate to the Update Employee page.
 * 5. Delete an employee and refresh the list.
 */
const ListEmployeeComponent = () => {

    // navigator is used to move from one page to another.
    // Example:
    // navigator("/add-employee")
    // opens the Add Employee page.
    const navigator = useNavigate();

    // React State
    // employees stores the list of employees.
    // Initially, it is an empty array because no data has been fetched yet.
    //
    // employees    -> Current state value.
    // setEmployees -> Function used to update the state.
    const [employees, setEmployees] = useState([]);


    /*
     * useEffect()
     * ------------
     * Runs automatically after the component is rendered.
     *
     * Here, it is used to fetch all employees when the page loads.
     *
     * The empty dependency array [] means:
     * "Run this effect only once when the component is mounted."
     */
    useEffect(() => {
        getAllEmployees();
    }, []);


    /*
     * Fetches all employees from the backend.
     */
    function getAllEmployees() {

        // Call the backend API.
        listEmployees()

            // If the API call is successful...
            .then((response) => {

                // response.data contains the employee list.
                // Save it into the employees state.
                setEmployees(response.data);

            })

            // If any error occurs...
            .catch(error => {
                console.error(error);
            });
    }


    /*
     * Navigates to the Add Employee page.
     */
    function addNewEmployee() {

        // Opens "/add-employee"
        navigator("/add-employee");
    }


    /*
     * Navigates to the Update Employee page.
     *
     * id = Employee ID to be updated.
     */
    function updateEmployee(id) {

        // Example:
        // id = 5
        //
        // Navigates to:
        // /update-employee/5
        navigator(`/update-employee/${id}`);
    }


    /*
     * Deletes an employee.
     *
     * id = Employee ID to delete.
     */
    function removeEmployee(id) {

        // Print the employee ID in the browser console.
        console.log(id);

        // Call the backend delete API.
        deleteEmployee(id)

            // If deletion is successful...
            .then((response) => {

                // Refresh the employee list.
                // This updates the table immediately.
                getAllEmployees();

            })

            // If any error occurs...
            .catch(error => {
                console.error(error);
            });
    }


    // JSX returned by the component.
    return (

        // Bootstrap container provides proper spacing and alignment.
        <div className="container">

            {/* Page heading */}
            <h2 className="text-center">List of Employees</h2>

            {/* Button to navigate to Add Employee page */}
            <button
                className='btn btn-primary mb-2'
                onClick={addNewEmployee}
            >
                Add Employee
            </button>

            {/* Bootstrap table */}
            <table className="table table-striped table-bordered">

                {/* Table Header */}
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>

                    {/* 
                        map() loops through each employee in the employees array.

                        If employees contains:
                        [
                          {id:1, firstName:"John"},
                          {id:2, firstName:"Alice"}
                        ]

                        map() creates one table row (<tr>) for each employee.
                    */}
                    {employees.map((employee) => (

                        // key helps React identify each row uniquely.
                        <tr key={employee.id}>

                            {/* Display employee details */}
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                            {/* Action buttons */}
                            <td>

                                {/* Update Button */}
                                <button
                                    className='btn btn-info'

                                    // Arrow function ensures updateEmployee()
                                    // is called only when the button is clicked.
                                    onClick={() => updateEmployee(employee.id)}
                                >
                                    Update
                                </button>

                                {/* Delete Button */}
                                <button
                                    className='btn btn-danger'

                                    // Delete the selected employee.
                                    onClick={() => removeEmployee(employee.id)}

                                    // Add space between Update and Delete buttons.
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

// Export the component so it can be used in App.jsx
export default ListEmployeeComponent