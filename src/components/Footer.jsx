import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* leftside */}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, hic!
          </p>
        </div>
        {/* centerside */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9845939245</li>
            <li>doctor@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">copyright @ hospital</p>
      </div>
    </div>
  );
};

export default Footer;