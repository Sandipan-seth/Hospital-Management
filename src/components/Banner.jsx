import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const {token} = useContext(AppContext);
    const navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue-500 text-white text-center p-4 gap-3 rounded-md flex flex-col items-center">
        <h1 className="text-2xl">Book an appointment now</h1>
        {token ? (
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => {
              navigate("/doctors");
            }}
          >
            Book Now
          </button>
        ) : (
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => {
              navigate("/login");
            }}
          >
            Create Account
          </button>
        )}
        <p className="text-sm">Get 50% off on your first appointment</p>
      </div>
    </div>
  );
}

export default Banner
