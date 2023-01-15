import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { API_URLS } from "../ApiUrls";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    const data = {
      userName: Email,
      password: Password,
    };
    const { status } = await axios.post(API_URLS.LOGIN, data);

    if (status == 200) return navigate("/home");
  };

  return (
    <div>
      <form className="Box">
        <h1>Login Here</h1>
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
        <Link to="/signup" className="link">
          Don't have Account?
        </Link>
        <Button onClick={handlelogin} type="submit" className="sidebar__tweet">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
