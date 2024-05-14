"use client";
import { jwtDecode } from "jwt-decode";

export const setUserLocalStorage = (token: string) => {
  if (!"accessToken" || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem("accessToken", token);
};

export const getUserLocalStorage = () => {
  if (!"accessToken" || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem("accessToken");
};

export const removeUserLocalStorage = () => {
  if (!"accessToken" || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem("accessToken");
};

interface IDecodedToken {
  email: string;
}

export const getAdmin = () => {
  const token = getUserLocalStorage();
  if (token) {
    const decodedToken = jwtDecode(token as string) as IDecodedToken;
    const { email } = decodedToken;
    return email;
  }
};
