import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("insurgo_auth") === "true");

  useEffect(() => {
    const handler = () => setIsLoggedIn(localStorage.getItem("insurgo_auth") === "true");
    window.addEventListener("storage", handler);
    window.addEventListener("auth-change", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("auth-change", handler);
    };
  }, []);

  const login = () => {
    localStorage.setItem("insurgo_auth", "true");
    window.dispatchEvent(new Event("auth-change"));
  };

  const logout = () => {
    localStorage.removeItem("insurgo_auth");
    window.dispatchEvent(new Event("auth-change"));
  };

  return { isLoggedIn, login, logout };
};
