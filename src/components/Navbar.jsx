import React from "react";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between bg-gray-700 text-white p-4 ">
      <img src="./logo.png" alt="LOGO" />
      <div className="space-x-10 text-xl">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

      </div>
      <MyButton />
    </div>
  );
}

export default Navbar;
