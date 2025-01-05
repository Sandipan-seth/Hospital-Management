import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-5 items-center">
        <h1 className="text-gray-900 text-4xl font-medium">Contact Us</h1>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <img className=" w-1/4 h-1/2" src={assets.contact_image} alt="" />
          <p className="flex flex-col">
            <p>Phone number: +91 9163028419</p>
            <p>Email:hospital@gmail.comn</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact
