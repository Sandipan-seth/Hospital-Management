import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  // const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState(true);
  const {token,setToken} = useContext(AppContext);

  return (
    <div className="sticky z-10 top-0 left-0 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-white bg-opacity-75">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">
            Home
            <hr
              className={`border-none outline-none h-0.5 w-4/5 m-auto bg-blue-400 hidden`}
            />
          </li>
        </NavLink>

        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr
            className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
          />
        </NavLink>

        <NavLink to={"/about"}>
          <li className="py-1">About</li>
          <hr
            className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
          />
        </NavLink>

        <NavLink to={"/contact"}>
          <li className="py-1">Contact</li>
          <hr
            className={`border-none outline-none h-0.5 bg-blue-400 w-4/5 m-auto hidden`}
          />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                <p onClick={()=>{
                    navigate("/my-profile");
                }} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>{
                    navigate("/my-appointments");
                }} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={()=>{
                    setToken(false);
                }} className="hover:text-black cursor-pointer">Log Out</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-400 text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => {
              navigate("/login");
            }}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
