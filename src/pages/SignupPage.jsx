import React, { useState } from "react";
import googleSvg from "../assets/google.svg";
import { useFirebase } from "../context/Firebase";

const SignupForm = ({ onClose, openLoginModal, error }) => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    await firebase.signUpWithEmailAndPassword(email, password);
  };

  const openLogIn = () => {
    onClose();
    openLoginModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-65"></div>
        {error && (
          <div className="absolute z-30 top-0 bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}
        <div className="relative bg-white w-96 rounded-lg shadow-xl sm:w-[90%]">
          <div className="p-8">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Pixabay</h2>
              <button className="text-blue-500" onClick={onClose}>
                Go Back
              </button>
            </div>
            {/* Sign up with Google */}
            <p className="text-gray-600 mt-8 mb-4">
              Please Sign Up to continue:
            </p>

            <button
              className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 w-full flex justify-center items-center gap-2"
              onClick={firebase.userWithGoogleAccount}
            >
              <img src={googleSvg} className="w-5 h-4" alt="Google Logo" />
              Sign up with Google
            </button>
            {/* OR */}
            <div className="flex items-center my-6">
              <div className="border-b border-gray-300 w-full"></div>
              <div className="text-gray-500 px-2">OR</div>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
            <form onSubmit={handleSignInSubmit}>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
            </form>
            {/* Sign In Option */}
            <p className="text-gray-600 mt-6">
              Already have an account? Sign in{" "}
              <p className="text-blue-500" onClick={openLogIn}>
                here
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
