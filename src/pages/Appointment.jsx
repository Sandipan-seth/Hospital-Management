import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, token } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("12:30 PM");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const navigate = useNavigate();

  async function fetchDocInfo() {
    if (docId && doctors) {
      const doc = doctors.find((doctor) => doctor._id === docId);
      setDocInfo(doc);
    }
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  if (!doctors) {
    return <p>Loading...</p>;
  }
  if (!docInfo) {
    return <p>Doctor not found</p>;
  }

  return (
    <div>
      {/* doc info */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div>
          <img
            className="bg-blue-300 hover:bg-blue-400 transition-all duration-300 w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <h1 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-4" src={assets.verified_icon} alt="" />
          </h1>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-700">
            <p>
              {docInfo.degree}-{docInfo.speciality}
            </p>
            <button className="border border-gray-900 rounded-lg px-2 py-0.5">
              {docInfo.experience}
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="flex text-sm text-gray-600  max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>

          <p className="mt-4 font-medium text-gray-600">
            Appointment Fee:{" "}
            <span className="text-gray-800">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* appointment slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-blue-400 text-white"
                      : "border border-gray-600"
                  }`}
                  onClick={() => {
                    setSlotIndex(index);
                  }}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              );
            })}
        </div>

        <div className="flex gap-3 mt-4 w-full overflow-x-scroll">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => {
              return (
                <p
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-blue-400 text-white"
                      : "border border-gray-600"
                  }`}
                  key={index}
                  onClick={() => {
                    setSlotTime(item.time);
                  }}
                >
                  {item.time.toLowerCase()}
                </p>
              );
            })}
        </div>

        <button
          className="bg-blue-400 text-white mt-4 px-10 py-3 rounded-full "
          onClick={() => {
            token
              ? alert("Appointment booked successfully")
              : navigate("/login");
          }}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
