import React from "react";
import Image from "next/image";
import profilePic from "../public/nextpic.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-tr from-blue-400">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        <div>
          <Link className="text-center underline" href="/">
            Back to Home
          </Link>
        </div>

        <Image
          className="border-2 rounded-3xl border-blue-500"
          src={profilePic}
          alt="Profile Picture"
          width={200}
          height={200}
        />

        <div>
          <h1 className="text-2xl font-semibold">Welcome to My Portfolio</h1>
        </div>

        <div>
          <nav className="font-semibold">
            <ul className="flex gap-5 text-center items-center justify-center">
              <li className="hover:underline">
                <Link href="/news/about">About</Link>
              </li>
              <li className="hover:underline">
                <Link href="/news/projects">Projects</Link>
              </li>
              <li className="hover:underline">
                <Link href="/news/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
