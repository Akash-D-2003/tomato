import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Navigate, NavLink } from "react-router-dom";
import { loginData } from "../Service/Api";
import { setUserToken, authentication } from "../Service/Storage/Storage";

const Login = () => {
  const fillError = {
    email: { errorMessage: false },
    password: { errorMessage: false },
    customError: null,
  };

  const [loader, setLoader] = useState(false);
  const [errors, setError] = useState(fillError);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = fillError;
    let hasError = false;
    setLoader(true);
    if (input.email == "") {
      errors.email.errorMessage = true;
      hasError = true;
      setLoader(false);
    }
    if (errors.password == "") {
      errors.password.errorMessage = true;
      hasError = true;
      setLoader(false);
    }
    setError({ ...errors });
    if (!hasError) {
      loginData(input)
        .then((response) => {
          console.log("response", response);
          let id = response.data.idToken;
          setUserToken(id);
        })
        .catch((e) => {
          console.log("error", e);
          if (e.code == "ERR_BAD_REQUEST") {
            setError({ ...errors, customError: "please enter valid email" });
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };
  if (authentication()) {
    return <Navigate to="/" />;
  }
  const handleChange = (val) => {
    let name = val.target.name;
    let value = val.target.value;
    console.log(name);
    console.log(value);

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="h-[100vh] w-full  flex items-center justify-center ">
      <div className="w-96 shadow-lg max-sm:mx-3  p-5 relative ">
        <div className="absolute top-6 right-3 w-8">
          <NavLink to={"/"}>
            <img src={assets.cross_icon} alt="" />
          </NavLink>
        </div>
        <h2 className="text-center text-[18px] font-bold mb-7">Login</h2>
        {errors.customError === null || (
          <h2 className=" bg-slate-100 px-5 py-2 rounded-lg mb-4 text-red-400 text-[14px] text-center">
            {errors.customError}
          </h2>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1">Email address:</label>
            <input
              onChange={handleChange}
              className={`border h-8  ps-1 ${errors.email.errorMessage ? "border-red-400" : ""}`}
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[16px] mb-1">Possord:</label>
            <input
              onChange={handleChange}
              className={`border h-8  ps-1 ${errors.email.errorMessage ? "border-red-400" : ""}`}
              type="password"
              name="password"
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
