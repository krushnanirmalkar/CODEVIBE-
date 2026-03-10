import React from "react"
import { useNavigate, Link } from 'react-router-dom';
const Head = () => {
  return (
    <div>
      
      <header>
        <div className="Register"> <Link to="/Login" className="Log">Login</Link>
         <Link to="/Signup" className="sign">SignUP</Link>
         <Link to="/Dashboard" className="Dash ">Dashboard</Link></div>

       

      <h1> 🌺Bloom with Jiya</h1> 
      <p>Learn coding , Grow skill , earn cetificate - BEWITHME!</p>
      </header>
    </div>
  )
}

export default Head