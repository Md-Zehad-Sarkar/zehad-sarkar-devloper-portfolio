import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
// interface IDecodedToken {
//   email: string;
//   role: string;
// }

export async function middleware(request: NextRequest) {
  const token = await cookies().get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  let decoded = null;
  if (token) {
    decoded = (await jwtDecode(token as string)) as any;
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
