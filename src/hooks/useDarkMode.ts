"use client";
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<string>("light"); // Menggunakan string "light" sebagai nilai awal

  const toggleDarkMode = () => {
    const newDarkMode = darkMode === "light" ? "dark" : "light"; // Toggle antara "light" dan "dark"
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode); // Menyimpan tema yang dipilih dalam penyimpanan lokal dengan kunci "theme"
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme); // Menggunakan tema yang disimpan dalam penyimpanan lokal saat komponen dimuat
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return { theme: darkMode, toggleDarkMode };
}
