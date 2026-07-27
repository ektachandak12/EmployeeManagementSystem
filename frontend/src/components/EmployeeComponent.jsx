// Import React and two Hooks:
// useState  -> Used to store and update data (state).
// useEffect -> Used to perform actions after the component renders.
import React, {useEffect, useState} from 'react';

// Import React Router Hooks
// useNavigate -> Used to navigate to another page programmatically.
// useParams   -> Used to read parameters from the URL (such as employee ID).
import { useNavigate, useParams } from 'react-router-dom'

// Import service methods that communicate with the backend.
// createEmployee() -> Creates a new employee.
// getEmployee()    -> Fetches an employee by ID.
// updateEmployee() -> Updates an existing employee.
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'


/*
 * EmployeeComponent
 * -----------------
 * This component is used for BOTH:
 * 1. Adding a new employee.
 * 2. Updating an existing employee.
 *
 * How does it know which operation to perform?
 *
 * URL: /add-employee
 *      -> No ID present.
 *      -> Add Employee mode.
 *
 * URL: /update-employee/5
 *      -> ID = 5
 *      -> Update Employee mode.
 *
 * Responsibilities:
 * 1. Display the employee form.
 * 2. Store form values using React state.
 * 3. Validate user input.
 * 4. Create a new employee.
 * 5. Load employee data for editing.
 * 6. Update employee information.
 */
const EmployeeComponent = () => {

    // -----------------------------
    // State Variables
    // -----------------------------
    // These store the values entered in the form.

    // Stores the employee's first name.
    const [firstName, setFirstName] = useState('');

    // Stores the employee's last name.
    const [lastName, setLastName] = useState('');

    // Stores the employee's email.
    const [email, setEmail] = useState('');


    /*
     * Validation Error State
     * -----------------------
     * Stores validation messages for each input field.
     *
     * Initially all error messages are empty.
     */
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });


    /*
     * Reads the "id" from the URL.
     *
     * Example:
     * URL:
     * /update-employee/5
     *
     * id = 5
     *
     * If URL is:
     * /add-employee
     *
     * id = undefined
     */
    const {id} = useParams();


    // Used to navigate to another page.
    const navigator = useNavigate();


    /*
     * useEffect()
     * ------------
     * Runs whenever the component loads or whenever "id" changes.
     *
     * If an ID exists, it means we are updating an employee.
     * So we fetch that employee's details from the backend.
     */
    useEffect(() => {

        // Check whether an ID exists.
        if(id){

            // Fetch employee details.
            getEmployee(id)

                .then((response) => {

                    // Fill the form with existing employee details.
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);

                })

                .catch(error => {
                    console.error(error);
                })
        }

    }, [id]);


    /*
     * saveOrUpdateEmployee()
     * -----------------------
     * Called when the user clicks the Submit button.
     *
     * This function:
     * 1. Prevents page refresh.
     * 2. Validates the form.
     * 3. Creates or updates the employee.
     */
    function saveOrUpdateEmployee(e){

        // Prevents the browser from refreshing the page.
        e.preventDefault();

        console.log("Submit clicked");

        // Continue only if validation succeeds.
        if(validateForm()){

            // Create an employee object from the form values.
            const employee = {
                firstName,
                lastName,
                email
            };

            console.log(employee);


            /*
             * Update Mode
             * ------------
             * If ID exists, update the employee.
             */
            if(id){

                updateEmployee(id, employee)

                    .then((response) => {

                        console.log(response.data);

                        // After successful update,
                        // return to Employee List page.
                        navigator('/employees');

                    })

                    .catch(error =>{
                        console.error(error);
                    })

            }

            /*
             * Add Mode
             * ----------
             * If no ID exists,
             * create a new employee.
             */
            else{

                createEmployee(employee)

                    .then((response) => {

                        console.log(response.data);

                        // After successful creation,
                        // go back to Employee List.
                        navigator('/employees');

                    })

                    .catch(error => {
                        console.error(error);
                    });
            }

        }

    }


    /*
     * validateForm()
     * ----------------
     * Checks whether all required fields are filled.
     *
     * Returns:
     * true  -> Form is valid.
     * false -> Form contains errors.
     */
    function validateForm(){

        // Assume form is valid.
        let valid = true;

        // Create a copy of the current error object.
        // We modify the copy instead of directly modifying state.
        const errorsCopy = {...errors};


        // Validate First Name
        if(firstName.trim()){

            errorsCopy.firstName = '';

        }else{

            errorsCopy.firstName = 'First name is required.';
            valid = false;
        }


        // Validate Last Name
        if(lastName.trim()){

            errorsCopy.lastName = '';

        }else{

            errorsCopy.lastName = 'Last name is required.';
            valid = false;
        }


        // Validate Email
        if(email.trim()){

            errorsCopy.email = '';

        }else{

            errorsCopy.email = 'Email is required.';
            valid = false;
        }


        // Update error state.
        setErrors(errorsCopy);

        console.log(errorsCopy);

        return valid;

    }


    /*
     * pageTitle()
     * ------------
     * Displays the correct page title.
     *
     * Update Mode -> "Update Employee"
     * Add Mode    -> "Add Employee"
     */
    function pageTitle(){

        if(id){

            return <h2 className='text-center'>Update Employee</h2>

        }else{

            return <h2 className='text-center'>Add Employee</h2>
        }

    }


    // JSX returned by this component.
    return (

        // Bootstrap container.
        <div className='container'>

            {/* Adds vertical spacing */}
            <br/><br/>

            <div className='row'>

                {/* Bootstrap Grid
                    col-md-6      -> Occupies 6 columns.
                    offset-md-3   -> Leaves 3 columns empty on the left.
                    Together this centers the form.
                */}
                <div className="col-md-6 offset-md-3">

                    {/* Bootstrap Card */}
                    <div className="card">

                        <br/>

                        {/* Display Add or Update heading */}
                        {
                            pageTitle()
                        }

                        <div className='card-body'>

                            {/* Form
                                When submitted,
                                saveOrUpdateEmployee() is called.
                            */}
                            <form onSubmit={saveOrUpdateEmployee}>

                                {/* ---------------- First Name ---------------- */}
                                <div className='form-group mb-2'>

                                    <label className='form-label'>
                                        First Name:
                                    </label>

                                    <input
                                        type='text'
                                        placeholder='Enter First Name'
                                        name='firstName'

                                        // Controlled Component
                                        // The input value always comes from React state.
                                        value={firstName}

                                        // If validation error exists,
                                        // Bootstrap adds a red border.
                                        className={`form-control ${errors.firstName ? 'is-invalid' : '' }`}

                                        // Update state whenever user types.
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>

                                    {/* Show validation message if present */}
                                    {errors.firstName &&
                                        <div className='invalid-feedback'>
                                            {errors.firstName}
                                        </div>
                                    }

                                </div>


                                {/* ---------------- Last Name ---------------- */}
                                <div className='form-group mb-2'>

                                    <label className='form-label'>
                                        Last Name
                                    </label>

                                    <input
                                        type='text'
                                        className={`form-control ${errors.lastName ? 'is-invalid' : '' }`}
                                        placeholder='Enter Last Name'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />

                                    {errors.lastName &&
                                        <div className='invalid-feedback'>
                                            {errors.lastName}
                                        </div>
                                    }

                                </div>


                                {/* ---------------- Email ---------------- */}
                                <div className='form-group mb-2'>

                                    <label className='form-label'>
                                        Email
                                    </label>

                                    <input
                                        type='email'
                                        className={`form-control ${errors.email ? 'is-invalid' : '' }`}
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    {errors.email &&
                                        <div className='invalid-feedback'>
                                            {errors.email}
                                        </div>
                                    }

                                </div>

                                {/* Submit Button */}
                                <button
                                    className='btn btn-success'
                                    type='submit'
                                >
                                    Submit
                                </button>

                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// Export the component so App.jsx can use it.
export default EmployeeComponent