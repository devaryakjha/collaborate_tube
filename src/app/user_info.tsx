"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

const UserInfo = ({ token }: { token: string }) => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user)
    return (
      <div>
        Hello <pre>{token}</pre> <a href="/api/auth/logout">Logout</a>
      </div>
    );

  return <a href="/api/auth/login">Login</a>;
};

export default UserInfo;
