
import validtoken from "@/utils/validtoken"
import { redirect } from "next/navigation";
import Addcontact_clinet from "./addcontact";
export default async function AddContact(){
    const token = await validtoken();
    if(!token){
        redirect("/auth/login")
    }
    console.log(token);
    
    

    return(
        <Addcontact_clinet user={token}/>        
    )
}