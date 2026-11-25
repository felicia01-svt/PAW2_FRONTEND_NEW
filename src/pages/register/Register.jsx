import React from 'react'
import { NavLink } from 'react-router'

const register = () => {
  return (
    <div>
        <h1>REGISTER PAGE</h1>

        <NavLink to="/about" className="btn btn-primary">
          GO TO ABOUT PAGE
        </NavLink>

        {" "}

        <NavLink to="/" className="btn btn-secondary">
          BACK TO HOME
        </NavLink>
    </div>
  )
}

export default register