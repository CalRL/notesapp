"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState } from "react";

function checkMode() {
  if (typeof window === "undefined") return;
  const currentTheme = localStorage.getItem("dark");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }
}

checkMode();

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button className="py-2 px-2" onClick={toggleDarkMode}>
      {theme ? <FaSun /> : <FaMoon />}
    </button>
  );
}
