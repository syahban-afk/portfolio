"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Kazeo
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="text-gray-200 hover:text-gray-400 mx-3"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-gray-200 hover:text-gray-400 mx-3"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-gray-400 mx-3"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex space-x-5">
          {Socials.map((social) => (
        <a href={social.link}>
          <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
        </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center space-y-4">
          <a href="#about-me" className="text-gray-200 hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="text-gray-200 hover:text-gray-400">
            Skills
          </a>
          <a href="#projects" className="text-gray-200 hover:text-gray-400">
            Projects
          </a>
          <div className="flex space-x-5">
            {Socials.map((social) => (
              <a href={social.link}>
              <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
            </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
