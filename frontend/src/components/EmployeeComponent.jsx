import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/EmployeeService'

const EmployeeComponent = () => {

    const [firstName, setFirstName] =useState('')
    const [lastName, setLastName] =useState('')
    const [email, setEmail] =useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

function saveEmployee(e){
    e.preventDefault();

      console.log("Submit clicked");

    if(validateForm()){
        const employee= {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee)
        .then((response) => {
            console.log(response.data);
            navigator('/employees');
        })
        .catch(error => {
            console.error(error);
        });
    }    
}

function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}

    if(firstName.trim()){
        errorsCopy.firstName = '';
    }else{
        errorsCopy.firstName = 'First name is required.'
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    }else{
        errorsCopy.lastName = 'Last name is required.'
        valid = false;
    }

    if(email.trim()){
        errorsCopy.email = '';
    }else{
        errorsCopy.email = 'Email is required.'
        valid = false;
    }

    setErrors(errorsCopy);

    console.log(errorsCopy);

    return valid;

}

  return (
    <div className='container'>
        <br/><br/>
         <div className='row'>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <br/>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form onSubmit={saveEmployee}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                type='text'
                                placeholder='Enter First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${errors.firstName ? 'is-invalid' : '' }`}
                                onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                                {errors.firstName && <div className= 'invalid-feedback'> {errors.firstName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : '' }`}
                                    placeholder='Enter Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className= 'invalid-feedback'> {errors.lastName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    className={`form-control ${errors.email ? 'is-invalid' : '' }`}
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className= 'invalid-feedback'> {errors.email} </div>}
                            </div> 
                            <button className='btn btn-success' type='submit'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>

         </div>
    </div>
  )
}

export default EmployeeComponent