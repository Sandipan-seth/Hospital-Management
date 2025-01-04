import React, { useContext } from "react";
// import { doctors } from "../assets/assets_frontend/assets";
import { Navigate, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
    const {doctors} = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Lorem ipsum dolor sit amet.
      </p>
      <div className="w-full grid grid-cols-auto pt-5 gap-y-6 gap-4 px-3 sm:px-0">
        {doctors.slice(0, 8).map((doctor, index) => {
          return (
            <div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 flex gap-4 p-4"
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
              }}
            >
              <img
                className="w-20 h-20 rounded-full bg-blue-200 hover:bg-blue-400 transition-all duration-300"
                src={doctor.image}
                alt=""
              />
              <div>
                <div className="flex items-center gap-2 text-sm text-center text-green-600">
                  <p className="w-3 h-3 bg-green-600 rounded-full"></p>
                  <p className="h-auto items-center flex justify-center">
                    Available
                  </p>
                </div>
                <p className="text-lg font-semibold">{doctor.name}</p>
                <p className="text-sm">{doctor.speciality}</p>
                <p className="text-sm">{doctor.experience}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="bg-blue-400 text-white px-12 py-3 rounded-full mt-10 hover:bg-blue-200 hover:text-black transition-all duration-300"
        onClick={() => {
          scrollTo(0, 0);
          navigate("/doctors");
        }}
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
