import validtoken from "@/utils/validtoken";
import Register_client from "./register";
import { redirect } from "next/navigation";

export default async function Register(){
  const verify_token = await validtoken()
  if(verify_token){
    redirect("/dashboard")
  }
  return(
    <Register_client/>
  )
}