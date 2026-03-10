import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(""); // Add this line

  const onFinish = () => {
    axios
      .post("https://codevibe-backend.onrender.com/api/authRoutes", {
        username: "Jiya",
        Email: "jia@gmail.com",
        college:"JMIT",
        year:"3rd",
        password: "yourpassword", 
        resetOTP: null,
        otpExpiry:null
      })
      .then((response) => {
        setData(response.data.message);
        console.log("Success:", response.data.message);
      })
      .catch((error) => {
        setData(error?.response?.data?.message || "Something went wrong");
        console.log("Error:", error?.response?.data?.message);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={onFinish}>SUBMIT</button>
      <p>Response: {data}</p>
    </div>
  );
};

export default App;
