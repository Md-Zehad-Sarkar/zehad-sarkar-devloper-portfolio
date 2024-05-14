"use client";
import { NextResponse, NextRequest } from "next/server";
import { getUserLocalStorage } from "./service/userStorage";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
interface IDecodedToken {
  email: string;
  role: string;
}

export function middleware(request: NextRequest) {
  const token = cookies().get("accessToken");
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  let decoded = null;
  if (token) {
    decoded = jwtDecode(token) as IDecodedToken;
  }

  const userRole = decoded?.role;
  if (userRole === "admin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
