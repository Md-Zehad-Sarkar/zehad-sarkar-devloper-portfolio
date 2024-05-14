"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// set accessToken on cookies
export const setAccessTokenCookies = (token: string, option: any) => {
  cookies().set("accessToken", token);
  if (option && option.redirect) {
    redirect(option?.redirect);
  }
};

export const deleteCookies = () => {
  cookies().delete("accessToken");
};
