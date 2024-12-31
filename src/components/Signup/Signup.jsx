import React, { useState } from "react";
import { signUpData } from "../Service/Api";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { authentication, getUserToken } from "../Service/Storage/Storage";
import { assets } from "../../assets/assets";
import { setUserToken } from "../Service/Storage/Storage";
const Signup = () => {
  const fillError = {
    username: { errorMessage: false },
    email: { errorMessage: false },
    password: { errorMessage: false },
    customError: null,
  };
  const [loader, setLoader] = useState(false);
  const [errors, setError] = useState(fillError);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let errors = fillError;
    let hassError = false;
    if (input.username == "") {
      errors.username.errorMessage = true;
      hassError = true;
      setLoader(false);
    }
    if (input.email == "") {
      errors.email.errorMessage = true;
      hassError = true;
      setLoader(false);
    }
    if (input.password == "") {
      errors.password.errorMessage = true;
      hassError = true;
      setLoader(false);
    }
    setError({ ...errors });
    if (!hassError) {
      signUpData(input)
        .then((response) => {
          let id = response.data.idToken;
          if (id) {
            setUserToken(id);
            setAuth(true);
          }
        })
        .catch((e) => {
          console.log("error", e);
          if (e.response.data.error.message == "EMAIL_EXISTS") {
            setError({ ...errors, customError: "Email Already Exist Please enter valid Email" });
          } else if (String(e.response.data.error.message).includes("WEAK_PASSWORD")) {
            setError({
              ...errors,
              customError: "WEAK_PASSWORD : Password should be at least 6 characters",
            });
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((preval) => {
      return { ...preval, [name]: value };
    });
  };
  if (authentication()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-96 shadow-lg p-5">
        <h2 className="text-center text-[18px] font-bold mb-7">Sign up</h2>

        {errors.customError === null || (
          <h2 className=" bg-slate-100 px-5 py-2 rounded-lg mb-4 text-red-400 text-[14px] text-center">
            {errors.customError}
          </h2>
        )}

        <form onSubmit={handlesubmit}>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1 font-medium">Name:</label>
            <input
              onChange={handleChange}
              name="username"
              className={`border h-8  ps-1 text-[14px] ${
                errors.username.errorMessage ? "border-red-500 " : ""
              }`}
              type="name"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1 font-medium">Email address:</label>
            <input
              onChange={handleChange}
              name="email"
              className={`border h-8  ps-1 text-[14px] ${
                errors.email.errorMessage ? "border-red-500 " : null
              }`}
              type="email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1 font-medium">Possord:</label>
            <input
              onChange={handleChange}
              name="password"
              className={`border h-8  ps-1 text-[14px] ${
                errors.password.errorMessage ? "border-red-500 " : null
              } `}
              type="password"
            />
          </div>
          <div className="flex items-center justify-center">
            {loader ? (
              <img className="w-24 block text-center" src={assets.loder} alt="loader" />
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col mb-3 ">
            <button className="text-white h-8 bg-blue-500">Sign up</button>
          </div>
        </form>
        <p className="text-end">
          Alredy registered
          <NavLink to="/login" className="text-blue-400 underline ps-1 decoration-1 cursor-pointer">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
