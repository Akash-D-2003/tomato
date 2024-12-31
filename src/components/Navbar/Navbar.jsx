import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { StoreConext } from "../../context/StoreContext";
import { logOut } from "../Service/Storage/Storage";
import { getUserToken, authentication } from "../Service/Storage/Storage";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { cartTotalAmount } = useContext(StoreConext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [auth, setAuth] = useState(authentication);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Navigate = useNavigate();
  const userLogOut = () => {
    logOut();
    setAuth(false);
    Navigate("/login");
  };

  console.log("sto", localStorage.idTken, getUserToken());
  return (
    <div className={isScrolled ? "fixed w-full bg-white top-0 right-0 z-10 shadow-lg" : ""}>
      <div
        className={`flex items-center justify-between gap-10 py-5 ${
          isScrolled ? "w-4/5 m-auto" : ""
        }`}
      >
        <NavLink to="/">
          <img src={assets.logo} alt="logo" className="lg:w-36 md:w-32 w-20" />
        </NavLink>
        <ul className="lg:flex list-none gap-5 text-black hidden">
          <a
            href="#home"
            onClick={() => setMenu("home")}
            className={`cursor-pointer ${
              menu === "home" ? "pb-0.5 border-b-2 border-amber-500" : ""
            }`}
          >
            home
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={`cursor-pointer ${
              menu === "menu" ? "pb-0.5 border-b-2 border-amber-500" : ""
            }`}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobileapp")}
            className={`cursor-pointer ${
              menu === "mobileapp" ? "pb-0.5 border-b-2 border-amber-500" : ""
            }`}
          >
            mobileapp
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={`cursor-pointer ${
              menu === "contact" ? "pb-0.5 border-b-2 border-amber-500" : ""
            }`}
          >
            contact us
          </a>
        </ul>
        <div className="flex items-center lg:gap-10 gap-4">
          <div>
            <img className="lg:w-5 md:w-3 w-5" src={assets.search_icon} alt="searh icon" />
          </div>
          <div className="relative">
            <NavLink to="/cartitem">
              <img className="lg:w-5 md:w-5 w-3" src={assets.basket_icon} alt="icon" />
            </NavLink>
            <div
              className={
                cartTotalAmount() === 0
                  ? ""
                  : "absolute w-2.5 h-2.5 bg-orange-500 rounded-md -top-2 -right-2"
              }
            ></div>
          </div>

          {auth ? (
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 p-1 flex items-center justify-center rounded-full border-2">
                <img src={assets.profile_icon} alt="user" />
              </div>
              <div onClick={userLogOut}>
                <p className="cursor-pointer">Logout</p>
              </div>
            </div>
          ) : (
            <NavLink
              to="/signup"
              className="bg-transparent lg:text-base text-sm border border-orange-500 lg:py-2.5  lg:px-8 px-2 py-1 cursor-pointer	rounded-3xl hover:bg-slate-200 transition-all	"
            >
              sign in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
