import {
  AppRouteHandlerFnContext,
  handleAuth,
  handleLogin,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export const GET = handleAuth({
  login: async (req: NextRequest, ctx: AppRouteHandlerFnContext) => {
    return handleLogin(req, ctx, {
      authorizationParams: {
        audience: process.env.AUTH0_AUDIENCE, // or AUTH0_AUDIENCE
        scope: process.env.AUTH0_SCOPE, // or AUTH0_SCOPE
      },
    });
  },
});
