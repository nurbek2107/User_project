"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Button } from "@material-tailwind/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <Link href="/">
        <div className="responsive_navbar  bg-[#FF9500] flex items-center gap-10 justify-center pt-3 pb-3 text-white rounded-md mt-2 cursor-pointer m-4">
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.599609 7.5C0.599609 7.00294 1.00255 6.6 1.49961 6.6L14.2651 6.6L9.27581 1.84874C8.91752 1.50423 8.90634 0.934492 9.25086 0.576197C9.59537 0.217903 10.1651 0.206731 10.5234 0.551245L17.1234 6.85125C17.2999 7.02093 17.3996 7.25518 17.3996 7.49999C17.3996 7.74481 17.2999 7.97906 17.1234 8.14874L10.5234 14.4487C10.1651 14.7933 9.59537 14.7821 9.25086 14.4238C8.90635 14.0655 8.91752 13.4958 9.27581 13.1512L14.2651 8.39999L1.49961 8.4C1.00255 8.4 0.599609 7.99705 0.599609 7.5Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
      <div className="main-container">
        <div className="navbar flex justify-between items-center p-4">
          <div className="left flex gap-5 items-center">
            <div className="left_svg">
              <Link href="/">
                <svg
                  width="54"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="54" height="54" rx="8" fill="#FF9500" />
                  <path
                    d="M11.167 44.1667L22.0003 33.3333H32.8337V22.5L43.667 33.3333L32.8337 44.1667H11.167Z"
                    fill="white"
                  />
                  <path
                    d="M11.167 22.5L22.0003 33.3333V22.5H32.8337L43.667 11.6667H22.0003L11.167 22.5Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div
              ref={menuRef}
              className={`right_text flex flex-col md:flex-row gap-4 ${menuOpen ? "slide-in" : "slide-f"}`}
            >
              <Link href="/"><div className="text_hover">Home</div></Link>
              <Link href="/"><div className="text_hover">Courses</div></Link>
              <Link href="/"><div className="text_hover">About Us</div></Link>
              <Link href="/"><div className="text_hover">Pricing</div></Link>
              <Link href="/"><div className="text_hover">Contact</div></Link>
            </div>
          </div>
          <div className="right flex items-center gap-4">
            <Button className="bg-[#FF9500] text-white">Kirish</Button>
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
