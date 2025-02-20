import React from "react";
import MyButton from "./MyButton";
function Navbar() {
  return (
    <div className="flex justify-between bg-gray-700 text-white p-4 ">
      <img src="./logo.png" alt="LOGO" />
      <div className="space-x-10 text-xl">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <MyButton />
    </div>
  );
}

export default Navbar;
