"use client"; // Ensure this component is treated as a client component

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Button } from "@material-tailwind/react";
import UpperNavbar from "../UpperNavbar";

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
      <UpperNavbar />
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
              className={`right_text ${menuOpen ? "slide-in" : "slide-f"}`}
            >
              <Link href="/"><div className="text_hover">Home</div></Link>
              <Link href="/courses"><div className="text_hover">Courses</div></Link>
              <Link href="/about"><div className="text_hover">About Us</div></Link>
              <Link href="/pricing"><div className="text_hover">Pricing</div></Link>
              <Link href="/contact"><div className="text_hover">Contact</div></Link>
            </div>
          </div>
          <div className="right flex items-center gap-4">
            <Button className="bg-[#FF9500] text-white">Kirish</Button>
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? (
                <svg
                  className="slide-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
