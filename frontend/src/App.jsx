// Import the global CSS file for styling the application
import './App.css'

// Import the component that displays the list of all employees
import ListEmployeeComponent from './components/ListEmployeeComponent';

// Import the header component that will be shown at the top of every page
import HeaderComponent from './components/HeaderComponent';

// Import the footer component that will be shown at the bottom of every page
import FooterComponent from './components/FooterComponent';

// Import React Router components
// BrowserRouter - Enables routing/navigation in the application
// Routes - Contains all the route definitions
// Route - Maps a URL path to a specific component
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Import the component used for both adding and updating employees
import EmployeeComponent from './components/EmployeeComponent';


/*
 * App Component
 * -------------
 * This is the root (main) component of the React application.
 *
 * Responsibilities:
 * 1. Sets up routing using React Router.
 * 2. Displays the Header on every page.
 * 3. Displays the Footer on every page.
 * 4. Loads different components based on the current URL.
 */
function App() {
  return (
    <>
        {/* BrowserRouter enables navigation between different pages
            without reloading the entire application. */}
        <BrowserRouter>

            {/* Header is displayed on every page */}
            <HeaderComponent />

            {/* Routes contains all the application's route definitions */}
            <Routes>

                {/* Default/Home page
                    When the user visits "/", the employee list is displayed. */}
                <Route path="/" element={<ListEmployeeComponent />} />

                {/* Employee List Page
                    Visiting "/employees" also displays the employee list. */}
                <Route path="/employees" element={<ListEmployeeComponent />} />

                {/* Add Employee Page
                    Opens the EmployeeComponent with an empty form
                    so that a new employee can be added. */}
                <Route path="/add-employee" element={<EmployeeComponent />} />

                {/* Update Employee Page
                    ":id" is a route parameter that stores the employee ID.
                    Example:
                    /update-employee/5

                    Here, id = 5.
                    EmployeeComponent reads this ID and loads the existing
                    employee details so they can be updated. */}
                <Route path="/update-employee/:id" element = {<EmployeeComponent/>} />

            </Routes>

            {/* Footer is displayed on every page */}
            <FooterComponent />

        </BrowserRouter>
    </>
  );
}

// Export App component so that it can be rendered by React
export default App