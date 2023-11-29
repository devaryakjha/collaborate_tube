import { getSession } from "@auth0/nextjs-auth0";
import UserInfo from "./user_info";

export default async function Home() {
  const session = await getSession();
  const accessToken = session?.accessToken;
  console.log(accessToken);
  return <UserInfo token={accessToken || ""} />;
}
