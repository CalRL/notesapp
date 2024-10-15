"use client";
import { useState } from "react";
import DarkMode from "../components/DarkMode";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const clearFields = (): void => {};
  const handleRegister = async (): Promise<void> => {
    try {
      const response = await fetch("/notes/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const contentType = response.headers.get("content-type");

      if (contentType && !contentType.includes("application/json")) {
        console.log("Response was not JSON");
      }

      if (response.ok) {
        setSuccessMessage("Account successfully created.");
        setError("");
      } else {
        const errorData = await response.json();
        setError(
          errorData.error || "Failed to create account. Try again later"
        );
      }
    } catch (error: any) {
      console.error(error);
      setError(
        "An unexpected error occured. Please try again later (frontend)."
      );
    }
  };

  return (
    <div>
      <DarkMode />
      <div className="flex justify-center w-full h-screen overflow-hidden mt-16">
        <div className="rounded-lg shadow-sm box-border w-[20%] h-[28rem] space-y-4 text-gray-700 dark:text-gray-200">
          <span className="block mt-4 text-center text-3xl font-semibold">
            Register
          </span>

          <div className="w-[60%] mx-auto">
            <span className="text-lg font-semibold">Username</span>
            <input
              className="block w-full box-border border-[1px] border-gray-700 rounded-md px-2 py-2"
              placeholder="your-desired-username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="w-[60%] mx-auto">
            <span className="text-lg font-semibold">Email</span>
            <input
              className="block w-full box-border border-[1px] border-gray-700 rounded-md px-2 py-2"
              placeholder="your-email"
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
            onClick={handleRegister}
          >
            Continue
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div className="flex justify-center">
            Already have an account?
            <a className="ml-1" href="login">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
