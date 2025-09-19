
import user from "@/models/user";
import Connect from "@/utils/connectDB";
import validtoken from "@/utils/validtoken";
import { redirect } from "next/navigation";
import Dashboard_client from "./dashboard_client";

export default async function Dashboard() {
  const verify_token = await validtoken();
  if (!verify_token) {
    redirect("/");
  }
  await Connect();
  const isuser = await user.findOne({ email: verify_token.email });
  const plain_user = JSON.parse(JSON.stringify(isuser));
  

  return (
    <Dashboard_client isuser={plain_user} />
  );
}
