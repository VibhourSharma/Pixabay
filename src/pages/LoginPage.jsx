import React, { useState } from "react";
import googleSvg from "../assets/google.svg";
import { useFirebase } from "../context/Firebase";

const LoginPage = ({ onClose, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();

  const handleLogin = async (e) => {
    e.preventDefault();
    await firebase.logInWithEmailAndPassword(email, password);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        {error && (
          <div className="absolute top-0 z-30 bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}
        <div className="relative bg-white w-96 rounded-lg shadow-xl">
          <div className="p-8">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Pixabay</h2>
              <button className="text-blue-500 mb-4" onClick={onClose}>
                Go Back
              </button>
            </div>
            <p className="text-gray-600 mb-4">Please login to continue:</p>
            <button
              className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 w-full flex justify-center items-center gap-2"
              onClick={firebase.userWithGoogleAccount}
            >
              <img src={googleSvg} className="w-5 h-4" />
              Login with Google
            </button>
            {/* <!-- OR --> */}
            <div className="flex items-center my-6">
              <div className="border-b border-gray-300 w-full"></div>
              <div className="text-gray-500 px-4">OR</div>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
            {/* <!-- Manual login --> */}
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label
                  htmlFor="Username"
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                    placeholder="Username"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Email
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Username"
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
                >
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-3"
                    placeholder="password"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Password
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full px-4 py-2 w-full"
              >
                Login
              </button>
            </form>
            {/* <!-- Sign up option --> */}
            <p className="text-gray-600 mt-8">
              Don't have an account? Sign up{" "}
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

export default LoginPage;
