"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
}
