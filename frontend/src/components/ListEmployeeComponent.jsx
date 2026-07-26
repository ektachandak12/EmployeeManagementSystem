import React from 'react'

const ListEmployeeComponent = () => {

        const dummyData = [
            {
                "id": 1,
                "firstName": "John",
                "lastName": "Doe",
                "emailId": "john@gmail.com"
            },
            {
                "id": 2,
                "firstName": "Jane",
                "lastName": "Smith",
                "emailId": "jane@gmail.com"
            },
            {
                "id": 3,
                "firstName": "Bob",
                "lastName": "Johnson",
                "emailId": "bob@gmail.com"
            },
            {
                "id": 4,
                "firstName": "Alice",
                "lastName": "Williams",
                "emailId": "alice@gmail.com"
            }

        ]
    
    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent