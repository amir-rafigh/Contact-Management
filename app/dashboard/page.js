import validtoken from "@/utils/validtoken"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    const verify_token = await validtoken()
    if(!verify_token){
        redirect("/")
    }   
    
    
    


    return(
        <h1>dashboard</h1>
    )
}
