"use server";
import { cookies } from "next/headers";

export const deleteCookies = () => {
  cookies().delete("accessToken");
};
