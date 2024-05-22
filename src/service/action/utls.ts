"use client";

import { jwtDecode } from "jwt-decode";
import { getUserLocalStorage } from "../userStorage";

export const jwtDecoded = (token: string) => {
  if (token) {
    const decodedData = jwtDecode(token);
    return decodedData;
  }
};

export const getAdminInfo = () => {
  const accessToken = getUserLocalStorage();
  let decoded = null;
  if (accessToken) {
    decoded = jwtDecode(accessToken);
  }
  return decoded;
};
