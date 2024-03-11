import React from "react";
import googleSvg from "../assets/google.svg";

const SignupForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-65"></div>
        <div className="relative bg-white w-96 rounded-lg shadow-xl">
          <div className="p-8">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Pixabay</h2>
              <button className="text-blue-500" onClick={onClose}>
                Go Back
              </button>
            </div>
            {/* Sign up with Google */}
            <button className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 w-full flex justify-center items-center gap-2">
              <img src={googleSvg} className="w-5 h-4" alt="Google Logo" />
              Sign up with Google
            </button>
            {/* OR */}
            <div className="flex items-center my-6">
              <div className="border-b border-gray-300 w-full"></div>
              <div className="text-gray-500 px-2">OR</div>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
            {/* First Name */}
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="text"
                  id="firstName"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="First Name"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  First Name
                </span>
              </label>
            </div>
            {/* Last Name */}
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="text"
                  id="lastName"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="Last Name"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Last Name
                </span>
              </label>
            </div>
            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="email"
                  id="email"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="Email"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="password"
                  id="password"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="Password"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Password
                </span>
              </label>
            </div>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full px-4 py-2 w-full"
            >
              Sign Up
            </button>
            {/* Sign In Option */}
            <p className="text-gray-600 mt-6">
              Already have an account? Sign in{" "}
              <a href="#" className="text-blue-500">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
