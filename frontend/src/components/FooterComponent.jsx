// Import React so that we can create React components
import React from 'react'

/*
 * FooterComponent
 * ----------------
 * This component displays the footer section of the application.
 *
 * Responsibilities:
 * 1. Displays a footer at the bottom of every page.
 * 2. Shows copyright or ownership information.
 * 3. Uses CSS styling through the "footer" class.
 */
const FooterComponent = () => {
  return (
    <div>

        {/* Footer section of the webpage.
            The className "footer" is used to apply custom CSS styles
            defined in your CSS file. */}
        <footer className="footer">

            {/* Span is an inline HTML element used to display text.
                Here, it contains the copyright information. */}
            <span>
                All Rights Reserved 2026 by Ekta Chandak
            </span>

        </footer>

    </div>
  )
}

// Export this component so it can be imported and used in other files
// (such as App.jsx)
export default FooterComponent