import NextAuth, { Session } from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  homeRoutes,
} from "@/routes";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;
    const IsLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const IsAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");
    if (isApiAuthRoute) {
      return;
    }

    if (IsAuthRoute) {
      if (IsLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return;
    }
    // if (!IsLoggedIn && IsSalesRoute) {
    //   return Response.redirect(new URL("/register", nextUrl));
    // }
    // return null;
    if (isAdminRoute && !IsLoggedIn) {
      return Response.redirect(new URL("/login", nextUrl));
    }
  }
);

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
