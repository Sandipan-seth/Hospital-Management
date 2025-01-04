import React, { useContext } from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const SpecialityMenu = () => {
  const { toggle, setToggle } = useContext(AppContext);
  return (
    <div
      className="flex flex-col items-center mt-10 gap-2 p-3 text-gray-800 overflow-scroll"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="w-1/3 text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptatibus?
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 overflow-scroll">
        {specialityData.map((item, index) => {
          return (
            <Link
              onClick={() => {
                scrollTo(0, 0);
                if (!toggle || item.speciality !== item.speciality) {
                  setToggle(!toggle);
                }
              }}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
