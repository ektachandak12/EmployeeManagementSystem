<div align="center">

# 👨‍💼 Employee Management System

A Full-Stack Employee Management System built using **Spring Boot**, **React**, **MySQL**, and **REST APIs**.

Manage employee records with complete **CRUD (Create, Read, Update, Delete)** operations through a clean and responsive web interface.

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-Build-C71A36?style=for-the-badge&logo=apachemaven)

</div>

---

# 📖 Project Description

Employee Management System is a full-stack web application developed to manage employee records efficiently. The application allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations through an intuitive and responsive user interface.

The frontend is built using **React** and communicates with a **Spring Boot REST API** using **Axios**. Employee data is stored in a **MySQL** database using **Spring Data JPA (Hibernate)**.

This project demonstrates industry-standard full-stack development practices including layered architecture, RESTful web services, DTO pattern, React component-based development, and client-server communication.

---

# ✨ Features

- 📋 View all employee records
- ➕ Add a new employee
- ✏️ Update employee information
- 🗑 Delete employee records
- 📧 Email validation
- ✅ Form validation with error messages
- 🔄 Client-side routing using React Router
- 🌐 RESTful API integration using Axios
- 🎨 Responsive UI built with Bootstrap 5
- ⚡ Dynamic rendering using React Hooks

---

# 🛠 Tech Stack

## Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate ORM
- Maven
- MySQL
- Lombok

## Frontend

- React 19
- Vite
- JavaScript (ES6+)
- React Router DOM
- Axios
- Bootstrap 5
- HTML5
- CSS3

---

# 🏗 Architecture Diagram

```
                React Frontend
                       │
                       │ Axios HTTP Requests
                       ▼
              Spring Boot REST API
                       │
                EmployeeController
                       │
                EmployeeService
                       │
           EmployeeRepository (JPA)
                       │
                  MySQL Database
```

### Backend Layered Architecture

```
Client Request
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
Database
```

---

# 📂 Project Structure

```text
EmployeeManagementSystem/
│
├── pom.xml
├── README.md
│
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── ems/
│                   └── EmployeeManagementSystem/
│                       │
│                       ├── controller/
│                       │   └── EmployeeController.java
│                       │
│                       ├── dto/
│                       │   └── EmployeeDto.java
│                       │
│                       ├── entity/
│                       │   └── Employee.java
│                       │
│                       ├── exception/
│                       │   └── ResourceNotFoundException.java
│                       │
│                       ├── mapper/
│                       │   └── EmployeeMapper.java
│                       │
│                       ├── repository/
│                       │   └── EmployeeRepository.java
│                       │
│                       ├── service/
│                       │   ├── EmployeeService.java
│                       │   └── EmployeeServiceImpl.java
│                       │
│                       └── EmployeeManagementSystemApplication.java
│
├── frontend/
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── index.html
│   │
│   └── src/
│       │
│       ├── components/
│       │   ├── HeaderComponent.jsx
│       │   ├── FooterComponent.jsx
│       │   ├── ListEmployeeComponent.jsx
│       │   └── EmployeeComponent.jsx
│       │
│       ├── services/
│       │   └── EmployeeService.js
│       │
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── screenshots/
│   ├── employee-list.png
│   ├── add-employee.png
│   └── update-employee.png
│
└── .mvn/
```

---

# 🌐 REST API Endpoints

| Method | Endpoint | Description |
|----------|-------------------------|------------------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/{id}` | Update an existing employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

---

# 📸 Application Screenshots

<table>
<tr>
<td align="center">
<b>Employee List</b><br><br>
<img src="screenshots/employee-list.png" width="850"/>
</td>
</tr>

<tr>
<td align="center">
<b>Add Employee</b><br><br>
<img src="screenshots/add-employee.png" width="850"/>
</td>
</tr>

<tr>
<td align="center">
<b>Update Employee</b><br><br>
<img src="screenshots/update-employee.png" width="850"/>
</td>
</tr>
</table>

---

# 🚀 Getting Started

## Prerequisites

Make sure the following software is installed:

- Java 17 or above
- Maven
- MySQL
- Node.js
- npm
- Git

---

## Clone the Repository

```bash
git clone https://github.com/ektachandak12/EmployeeManagementSystem.git

cd EmployeeManagementSystem
```

---

## Backend Setup

Configure your MySQL database in `application.properties`.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

Run the backend:

```bash
./mvnw spring-boot:run
```

The backend starts on:

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend starts on:

```
http://localhost:5173
```

---

# 💡 Future Enhancements

- 🔍 Search employees by name
- 📄 Pagination
- ↕ Sorting functionality
- 🔐 Spring Security with JWT Authentication
- 👥 Role-Based Access Control
- 🏢 Department Management Module
- 📤 Profile Image Upload
- 📊 Employee Dashboard
- 🌙 Dark Mode
- 🧪 Unit and Integration Testing
- 🐳 Docker Support
- ☁ Cloud Deployment

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Building RESTful APIs with Spring Boot
- Layered backend architecture
- Spring Data JPA and Hibernate
- DTO and Mapper design pattern
- React component-based development
- React Hooks (`useState`, `useEffect`)
- React Router
- Axios for API communication
- Form validation
- CRUD application development
- Frontend and backend integration
- MySQL database operations
- Maven project management
- Bootstrap responsive design

---

# 👩‍💻 Author

**Ekta Chandak**

Final Year B.Tech Student (Artificial Intelligence & Data Science)

Java Full Stack Developer

- GitHub: https://github.com/ektachandak12
- LinkedIn: https://www.linkedin.com/in/ekta-chandak-bb43192b5/

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project for learning and educational purposes.

---

<div align="center">

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!

</div>
