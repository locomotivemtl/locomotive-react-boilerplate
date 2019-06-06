import React from 'react'

// Function component
const Spinner = () =>

    <div className="spinner_wrapper">
        <svg className="spinner" viewBox="25 25 50 50">
            <circle className="spinner_circle" cx="50" cy="50" r="20"></circle>
        </svg>
    </div>

export default Spinner

