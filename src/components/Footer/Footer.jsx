import React from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-60" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            sint id a quidem odit impedit possimus minus enim, omnis
            consequuntur aliquid distinctio soluta quibusdam natus blanditiis
            voluptatibus ipsum asperiores cupiditate!
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link>Delivery</Link>
            <Link>Privacy policy</Link>
          </ul>
        </div>

        {/* Get in touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 12345 67890</li>
            <li>cozybasics@gmail.com</li>
            <a
              href="https://www.instagram.com/code_beyond/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ cozybasics.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
