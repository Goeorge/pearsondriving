"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Header = () => {
  //Params
  const [menuOpen, setMenuOpen] = useState(false);

  //Functions
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //Body
  return (
    <header className="flex items-center justify-between  p-6 md:px-8 lg:px-20 bg-white border-b border-orange-200 relative">
      <div className="flex items-center justify-center w-full lg:w-auto">
        <Link href='/'>
          <Image
            src="/brand/pearson-driving-logo.webp"
            alt="Dride Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-6 lg:hidden">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer">
          <FaSearch className="text-green-500 cursor-pointer" />
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <CiMenuBurger className="text-green-500" size={32} />
        </div>
      </div>
      <nav
        className={`fixed top-0 right-0 w-64 lg:w-1/2 bg-white flex flex-col justify-between items-start h-full h-full transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:ml-10 lg:relative lg:transform-none  lg:flex lg:items-center lg:justify-evenly lg:space-x-10`}>
        <ul className="flex flex-col space-y-6 p-6 lg:flex-row lg:space-y-0 lg:space-x-8 text-xl font-semibold">
          <li className="flex justify-end lg:hidden">
            <IoMdClose
              className="text-green cursor-pointer"
              size={32}
              onClick={toggleMenu}
            />
          </li>
          <li>
            <Link
              href="/"
              className="text-orange hover:text-green no-underline">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/courses"
              className="text-orange hover:text-green no-underline">
              Courses
            </Link>
          </li>
         
          {/* <li className="relative group">
            <Link
              href="#help"
              className="text-orange hover:text-green no-underline">
              Help Center
            </Link>
          </li> */}
          <li>
            <Link
              href="about-us"
              className="text-orange hover:text-green no-underline">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-orange hover:text-green no-underline">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center space-x-4 p-6 lg:hidden">
          <div className="text-lg text-orange font-semibold mb-6">
            FOLLOW US
          </div>
          <div className="flex items-center justify-evenly space-x-6">
          <Link href="#" className="text-green hover:text-orange">
            <FaYoutube width={24} height={24} />
          </Link>
          <Link href="#" className="text-green hover:text-orange">
            <FaLinkedin width={36} height={36} />
          </Link>
          <Link href="#" className="text-green hover:text-orange">
            <FaInstagram width={24} height={24} />
          </Link>
          <Link href="#" className="text-green hover:text-orange">
            <FaTwitter width={24} height={24} />
          </Link>
          <Link href="#" className="text-green hover:text-orange">
            <FaFacebook width={24} height={24} />
          </Link>
          </div>
          <div className="px-auto py-4">
            <span className="text-green text-xl">(254) 0746834612</span>
          </div>
        </div>
      </nav>
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer">
            <FaSearch
              width={54}
              height={54}
              className="stroke-green cursor-pointer"
            />
          </div>
          <Link
            href="#"
            className="px-4 py-2 text-white font-semibold hover:bg-green bg-orange rounded no-underline">
            ENROLL NOW →
          </Link>
          <div className="cursor-pointer">
            <CiMenuBurger width={64} height={64} className="stroke-green" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
