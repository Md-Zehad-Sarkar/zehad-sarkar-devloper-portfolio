"use client";
import { NextResponse, NextRequest } from "next/server";
import { getUserLocalStorage } from "./service/userStorage";
import { jwtDecode } from "jwt-decode";
interface IDecodedToken {
  email: string;
  role: string;
}

export function middleware(request: NextRequest) {
  // const token = getUserLocalStorage();
  
  // if (!token) {
  //   return NextResponse.redirect(new URL("/admin-login", request.url));
  // }

  // let decoded = null;
  // if (token) {
  //   decoded = jwtDecode(token as string) as IDecodedToken;
  // }

  // const userRole = decoded?.role;
  // if (userRole === "admin") {
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // matcher: ["/dashboard/:path*"],
};
