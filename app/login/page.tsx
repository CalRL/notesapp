"use client";
import "@/app/globals.css";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
    console.log("TODO");
    const response = await fetch("/notes/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  if (!loggedIn) {
    return (
      <div>
        <div className="flex justify-center w-full h-screen overflow-hidden mt-16">
          <div className="rounded-lg shadow-sm box-border w-[20%] h-[28rem] space-y-4 text-gray-700 dark:text-gray-200">
            <span className="block mt-4 text-center text-3xl font-semibold">
              Login
            </span>

            <div className="w-[60%] mx-auto">
              <span className="text-lg font-semibold">Email</span>
              <input
                className="block w-full box-border border-[1px] border-gray-700 rounded-md px-2 py-2"
                placeholder="your username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="w-[60%] mx-auto">
              <span className="text-lg font-semibold">Password</span>
              <input
                className="block w-full box-border border-[1px] border-gray-700 rounded-md px-2 py-2 "
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              className="text-center bg-blue-200 px-2 py-2 rounded-lg flex mx-auto w-[60%] text-white font-semibold"
              onClick={handleLogin}
            >
              Continue
            </button>

            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
