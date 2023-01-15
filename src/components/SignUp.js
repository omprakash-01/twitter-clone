import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Conpassword, setConpassword] = useState("");
  const createUser = async (e) => {
    e.preventDefault();
    console.log(Name, Email, Password);
    const data ={
      name:Name,
      email:Email,
      password:Password
    }
     await axios.post('http://localhost:5000/signup',data);
  };



  return (
    <div>
      <form className="Box" onSubmit={createUser}>
        <h1>SignUp Here</h1>
        <input
          className="Box__input"
          onChange={(e) => setName(e.target.value)}
          value={Name}
          placeholder="Enter Your Name"
          type="text"
        />
        <input
          className="Box__input"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          placeholder="Enter Your Email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
          className="Box__input"
          placeholder="Enter Your password"
          type="password"
        />
        <input
          onChange={(e) => setConpassword(e.target.value)}
          value={Conpassword}
          className="Box__input"
          placeholder="Confirm password"
          type="password"
        />
        <Link to="/login" className="link">
          have Account ? login
        </Link>
        <Button onClick={createUser} type="submit" className="sidebar__tweet">
          SignUp
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
