"use client";
import { useState } from "react";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (): void => {
    console.log(username, email, password);
  };

  return (
    <div>
      <div className="flex justify-center w-full h-screen overflow-hidden mt-16">
        <div className="rounded-lg shadow-sm box-border w-[20%] h-[28rem] space-y-4 text-gray-700">
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
              className="block w-full box-border border-[1px] border-gray-700 rounded-md px-2 py-2"
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
        </div>
      </div>
    </div>
  );
}
