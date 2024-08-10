"use client"; // Ensure this is at the top of the file if you use useRouter

import { useState } from "react";
import { useRouter } from "next/navigation";

function TestComponent() {
  const [videoSrc, setVideoSrc] = useState("https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn"); // Default video URL
  const router = useRouter();

  const courses = [
    { id: 1, title: "1-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn" }, // Update with actual URLs
    { id: 2, title: "2-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn" },
    { id: 3, title: "3-video", url: "https://kinescope.io/embed/8KDbVsbuzjcq8KLwwd2ayn" }, // Example URL
    // Add more courses with URLs as needed
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
      </div>
    </>
  );
}

export default TestComponent;
