import React from 'react'
import {Link} from 'react-router-dom'
import './errorpage.css'

const ErrorPage = () => {
    return(
        <div>
            <br></br>
            <h1 className="center">Sorry this page is unavailable</h1>
            <br></br>
            <Link to="/" className="resolve-issue">Click here to go back to home page</Link>
        </div>
    );
}

export default ErrorPage