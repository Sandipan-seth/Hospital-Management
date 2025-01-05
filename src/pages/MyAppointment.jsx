import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        My Appointment
      </h1>
      <div className="space-y-6">
        {doctors.slice(2,5).map((doctor, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200  p-4 flex flex-col sm:flex-row items-center gap-4 hover:shadow-md transition-all duration-300"
            >
              {/* Doctor's Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full border-2 bg-blue-200 hover:bg-blue-400 transition-all duration-300"
              />

              {/* Doctor's Info */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-lg font-medium">{doctor.name}</p>
                <p className="text-gray-500 text-sm">{doctor.speciality}</p>
                <p className="text-gray-700">{doctor.qualification}</p>
                <p className="text-gray-600 text-sm">
                  {doctor.experience} years of experience
                </p>
                <p className="text-gray-900 text-sm">
                  Date & Time :{" "}
                  <span className="text-gray-600 text-sm">
                    12-12-2025 | 5:30 PM
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row sm:flex-col gap-2 flex-wrap justify-center sm:justify-start">
                <button className="bg-white text-black px-4 py-2 rounded border border-gray-500 shadow hover:bg-red-500 hover:text-white transition-all duration-300 w-full">
                  Cancel Appointment
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-all duration-300 w-full">
                  Pay Online
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointment;
