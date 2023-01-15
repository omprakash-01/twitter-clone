import Sidebar from "./Sidebar";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </>
  );
}

export default App;
