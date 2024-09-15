
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="ml-5">
        <Link className="underline" href="/news">
          Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you have a question, feedback, or
          just want to connect, feel free to reach out.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <a
              href="mailto: adaezeugwumba460@gmail.com"
              className="text-gray-600"
            >
              adaezeugwumba460@gmail.com
            </a>
            <a
              href="mailto: adaezeugwumba034@gmail.com"
              className="text-gray-600"
            >
              adaezeugwumba034@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <a href="tel:+2349039558051" rel="noopener noreferrer">
              +(234) 903-955-8051
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Social Media
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/adaeze-ugwumba-3a9b9922a"
                  className="hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/gomycode/status/1615290413027586048?s=46"
                  className="hover:text-blue-500"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Angee-web"
                  className="hover:text-blue-500"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Send a Message
        </h2>
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 py-6 border-t border-gray-200">
        <p className="text-gray-600">
          © 2024 Adaeze Ugwumba. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
