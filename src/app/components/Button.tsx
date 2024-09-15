"use client"; // This marks the component as a Client Component


import Link from 'next/link';
import { useState } from 'react';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Button */}
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-all"
      >
        Click Me
      </button>

      {/* Sliding Words */}
      <div className="relative mt-4 space-y-4">
        {/* Hello (Up) */}
        <div
          className={`${
            isClicked
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } transition-all duration-[2000ms] ease-out`}
        >
          <span className="block text-8xl text-black">Hello</span>
        </div>

        {/* World (Down) */}
        <div
          className={`${
            isClicked
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } transition-all duration-[2000ms] ease-out`}
        >
          <span className="block text-8xl text-black">World</span>
        </div>

        <div
          className={`${
            isClicked
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          } transition-all duration-[2000ms] ease-out`}
        >
          <span className="block text-2xl text-center text-black">
            <Link href="/news">View my portfolio</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Button;
