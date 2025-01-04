import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { specialityData } from "../assets/assets_frontend/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors,toggle, setToggle } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate();


  const applyFilter = () => {
    if(speciality){
      setFilteredDoctors(doctors.filter((doctor) => doctor.speciality === speciality));
    }
    else{
      setFilteredDoctors(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors,speciality]);


  return (
    <div className="flex flex-col">
      <p className="text-center text-2xl">Browse through the doctors specialist</p>
      <div className="flex gap-14 ">
        <div>
          {specialityData.map((item, index) => {
            return <p key={index}
            onClick={()=>{
              if(!toggle || item.speciality !== speciality){
                navigate(`/doctors/${item.speciality}`)
              }
              else{
                navigate(`/doctors`)
              }
              setToggle(!toggle)
            }}
            className={`border border-blue-400 cursor-pointer m-3 p-3 rounded-lg  text-sm hover:bg-blue-200 text-black transition-all duration-300 ${toggle && item.speciality === speciality ? 'bg-blue-200':''}`}
            >{item.speciality}</p>;
          })}
        </div>
        <div className="w-full grid grid-cols-auto pt-5 gap-y-6 gap-4 px-3 sm:px-0">
          {filteredDoctors.map((doctor,index) => {
            return (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 flex gap-4 p-4"
                onClick={() => { navigate(`/appointment/${doctor._id}`); }}
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
      </div>
    </div>
  );
};

export default Doctors;
