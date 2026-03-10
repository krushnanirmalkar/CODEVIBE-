import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://codevibe-backend.onrender.com/api/auth/login", {
        username,
        Email:email,   // ✅ lowercase use karo
        password,
        college,
        year,
      });

      console.log("✅ Login successful", response.data);
      setResponseMsg(response.data.message);

      if (response.data.success) {
        // ✅ localStorage me user save karo
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/Dashboard");
      }
    } catch (error) {
      console.error("❌ Login error", error.response?.data || error.message);
      setResponseMsg(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>USERNAME:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>COLLEGE:</label>
        <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} required />

        <label>YEAR:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />

        <label>EMAIL:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>PASSWORD:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">SUBMIT</button>

        {responseMsg && <p style={{ color: "white" }}>{responseMsg}</p>}

        <p>
          Don't have an account? <Link to="/Signup">Signup</Link>
        </p>
        <p>
          Forgot Password? <Link to="/ForgetPassword">Click Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
