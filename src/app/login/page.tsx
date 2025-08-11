"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Google Icon SVG
const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M533.5 278.4c0-17.4-1.6-34-4.7-50.2H272v95h146.9c-6.4 34.4-25.6 63.6-54.6 83.2v68h88.4c51.6-47.5 80.8-117.5 80.8-196z"
      fill="#4285F4"
    />
    <path
      d="M272 544.3c73.7 0 135.6-24.5 180.8-66.4l-88.4-68c-24.5 16.5-55.8 26.3-92.4 26.3-71 0-131-47.9-152.4-112.1h-90v70.3c45.1 88.3 137.5 150 242.4 150z"
      fill="#34A853"
    />
    <path
      d="M119.6 323.9c-10.9-32.6-10.9-67.8 0-100.4v-70.3h-90C-20.1 228.5-20.1 315.8 29.6 392l90-68.1z"
      fill="#FBBC05"
    />
    <path
      d="M272 107.7c39.9 0 75.9 13.8 104.2 40.9l77.9-77.9C407.6 24.5 345.7 0 272 0 167.1 0 74.7 61.7 29.6 150l90 70.3C141 155.6 201 107.7 272 107.7z"
      fill="#EA4335"
    />
  </svg>
);

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    toast.success("If this email exists, a reset link will be sent.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">
          Welcome Back
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Please log in to continue
        </p>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn("credentials");
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
              <button
                type="button"
                className="text-blue-600 cursor-pointer hover:underline text-xs"
                onClick={() => setShowModal(true)}
              >
                Forgot password?
              </button>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 cursor-pointer bg-sky-700 hover:bg-sky-300 text-white hover:text-black rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </a>
          </p>
        </div>

        {/* Alternative Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">or</p>
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 cursor-pointer bg-white border hover:bg-gray-100 text-gray-800 rounded-lg font-medium transition dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
          >
            <GoogleIcon className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-40 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              Reset Password
            </h2>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Send Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
