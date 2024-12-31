import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-96 shadow-lg p-5">
        <h2 className="text-center text-[18px] font-bold mb-7">Login</h2>
        <form action="">
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1">Email address:</label>
            <input className="border h-8  ps-1" type="email" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1">Possord:</label>
            <input className="border h-8  ps-1" type="password" />
          </div>
          <div className="flex flex-col mb-3 ">
            <button className="text-white h-8 bg-blue-500">Submit</button>
          </div>
        </form>
        <p className="text-end">
          New user
          <NavLink
            to="/signup"
            className="text-blue-400 underline decoration-1 cursor-pointer ps-1"
          >
            Register hear
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
