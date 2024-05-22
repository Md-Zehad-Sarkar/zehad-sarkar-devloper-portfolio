import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const token = cookies().get("accessToken")?.value;
  console.log("token======", token);
  console.log("req url======", request.nextUrl.pathname);
  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }
  let decoded = null;
  if (token) {
    decoded = (await jwtDecode(token as string)) as any;
  }
  const userRole = decoded?.role;
  console.log("user role==", userRole);

  if (userRole === "admin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
