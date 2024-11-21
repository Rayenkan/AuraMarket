import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("Middleware triggered:", { pathname });

  // Redirect to home page
  if (pathname == "/") {
    return NextResponse.redirect(new URL("/homePage", request.url));
  }

  // Allow the request to proceed if no conditions are met
  return NextResponse.next();
}

// Apply middleware to all routes except API, static files, and Next.js internals
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
