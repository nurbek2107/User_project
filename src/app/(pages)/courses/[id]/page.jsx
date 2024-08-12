"use client"; // Ensure this is at the top of the file if you use useRouter

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

function TestComponent() {
  const [videoSrc, setVideoSrc] = useState("https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn"); // Default video URL
  const [activeTab, setActiveTab] = useState("dashboard"); // Set default active tab
  const router = useRouter();

  const courses = [
    { id: 1, title: "1-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn",
      label: "Dashboard",
      value: "dashboard",
      icon: UserCircleIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    }, 
    { 
      id: 2, title: "2-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn",
      label: "Profile",
      value: "profile",
      icon: Square3Stack3DIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    { id: 3, title: "3-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn",
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`, 
    },
  ];

  const handleClick = (id, url) => {
    setVideoSrc(url); // Update video URL based on the selected course
    router.push(`/courses/${id}`);
  };

  return (
    <>
      <div className="main-container px-4 md:px-8 lg:px-16">
        <div className="course_container flex flex-col md:flex-row gap-6 justify-center mt-8 mb-10 h-[400px] w-full">
          {/* Video Container */}
          <div className="relative w-full aspect-w-16 aspect-h-9 flex-1">
            <iframe
              src={videoSrc}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
              allowFullScreen
              className="w-full h-full"
              title="Course Video"
            ></iframe>
          </div>
          {/* Button Container */}
          <div className="w-full md:w-[40%] lg:w-[30%] h-auto overflow-x-hidden">
            <div className="flex flex-col gap-4 p-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="card bg-white border border-gray-300 rounded-lg shadow-md w-full h-auto flex items-center justify-center text-lg md:text-xl font-bold transition-shadow hover:shadow-xl focus:outline-none py-4"
                  onClick={() => handleClick(course.id, course.url)}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Tabs value={activeTab} onChange={(tab) => setActiveTab(tab)}>
          <TabsHeader>
            {courses.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {courses.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default TestComponent;
