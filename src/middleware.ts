import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export  function middleware(request: NextRequest) {
  // const token =  cookies().get("accessToken")?.value;
  // if (!token) {
  //   return NextResponse.redirect(new URL("/admin-login", request.url));
  // }
  // let decoded = null;
  // if (token) {
  //   decoded = (await jwtDecode(token as string)) as any;
  // }
  // const userRole = decoded?.role;
  // if (userRole === "admin") {
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
