import validtoken from "@/utils/validtoken";
import Login_client from "./login";
import { redirect } from "next/navigation";

export default async function Login(){
  const verify_token = await validtoken()
  if(verify_token){
    redirect("/dashboard")
  }


  return(
    <Login_client/>
  )
}