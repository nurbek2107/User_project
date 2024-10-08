"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import UpperNavbar from "../UpperNavbar";
import "./Navbar.css";
import Profile from "../Profile";
import toast from "react-hot-toast";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let [kirish, setKirish] = useState(true);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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

  useEffect(() => {
    // Menyu yopiladi, agar sahifa o'zgargan bo'lsa
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <UpperNavbar />
      <header className="p-4 border-b-2">
        <div className="navbar main-container flex justify-between items-center">
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
              className={`right_text ${menuOpen ? "slide-in" : "slide-f"} font-medium`}>
              <Link href="/"><div className="text_hover">Home</div></Link>
              <Link href="/courses"><div className="text_hover">Courses</div></Link>
              <Link href="/about"><div className="text_hover">About Us</div></Link>
              <Link href="/pricing"><div className="text_hover">Pricing</div></Link>
              <Link href="/contact"><div className="text_hover">Contact</div></Link>
            </div>
          </div>
          <div className="right flex items-center gap-4">
            {kirish ?
              <Button onClick={() => {
                setKirish(false)
                toast.success("Kirish qilindi");
              }} className="bg-[#FF9500] text-white">Kirish</Button>
              :
              <Profile setKirish={setKirish} kirish={kirish} />
            }
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
      </header>
    </>
  );
}

export default Navbar;