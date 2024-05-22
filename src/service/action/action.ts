"use server";

import { cookies } from "next/headers";
import { jwtDecoded } from "./utls";

export const loginAdmin = async (value: any) => {
  // const localUrl = "http://localhost:5000/api/v1/login-users";
  const serverUrl =
    "https://portfolio-server-sigma-eight.vercel.app/api/v1/login-users";
  try {
    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const userInfo = await res.json();

    // set accessToken on cookie
    if (userInfo && userInfo.accessToken) {
      cookies().set("accessToken", userInfo.accessToken);
    }
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};


// get accessToken from cookie
export const getToken = () => {
  try {
    const token = cookies().get("accessToken")?.value;
    return token;
  } catch (error) {
    console.log(error);
  }
};
