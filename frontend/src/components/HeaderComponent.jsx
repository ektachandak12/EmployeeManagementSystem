// Import React so that we can create React components
import React from 'react'

/*
 * HeaderComponent
 * ----------------
 * This component displays the header section of the application.
 *
 * Responsibilities:
 * 1. Displays a navigation bar at the top of every page.
 * 2. Shows the title of the Employee Management System.
 * 3. Uses Bootstrap classes for styling.
 */
const HeaderComponent = () => {
  return (
    <div>

        {/* Header section of the webpage */}
        <header>

            {/* Bootstrap Navbar
                navbar       -> Creates a navigation bar.
                navbar-dark  -> Makes the text suitable for dark backgrounds.
                bg-dark      -> Gives the navbar a dark background color. */}
            <nav className="navbar navbar-dark bg-dark">

                {/* Brand name of the application.
                    The href attribute specifies the URL that opens
                    when the user clicks the application title. */}
                <a className="navbar-brand" href="https://www.ems.com/">
                    Employee Management System
                </a>

            </nav>

        </header>

    </div>
  )
}

// Export this component so it can be imported and used in other files
// (such as App.jsx)
export default HeaderComponent