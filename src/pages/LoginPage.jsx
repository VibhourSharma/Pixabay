import React from "react";
import googleSvg from "../assets/google.svg";

const LoginPage = () => {
  return (
    <div class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="relative bg-white w-96 rounded-lg shadow-xl">
          <div class="p-8">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 class="text-2xl font-bold mb-4">Pixabay</h2>
              <button class="text-blue-500 mb-4">Go Back</button>
            </div>
            <p class="text-gray-600 mb-4">Please login to continue:</p>
            <button class="text-blue-500 border border-blue-500 rounded-full px-4 py-2 w-full flex justify-center items-center gap-2">
              <img src={googleSvg} className="w-5 h-4" />
              Login with Google
            </button>
            {/* <!-- OR --> */}
            <div class="flex items-center my-6">
              <div class="border-b border-gray-300 w-full"></div>
              <div class="text-gray-500 px-4">OR</div>
              <div class="border-b border-gray-300 w-full"></div>
            </div>
            {/* <!-- Manual login --> */}
            <div class="mb-6">
              <label
                for="Username"
                class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="email"
                  id="email"
                  class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="Username"
                />

                <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
            <div class="mb-6">
              <label
                for="Username"
                class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <input
                  type="password"
                  id="password"
                  class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                  placeholder="password"
                />

                <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Password
                </span>
              </label>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white rounded-full px-4 py-2 w-full mb-4"
            >
              Login
            </button>
            {/* <!-- Sign up option --> */}
            <p class="text-gray-600 mt-8">
              Don't have an account? Sign up{" "}
              <a href="#" class="text-blue-500">
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

export default LoginPage;
