import contact from "@/models/contact"
import Connect from "@/utils/connectDB"
import validtoken from "@/utils/validtoken"
import { redirect } from "next/navigation"
import Contacts_client from "./contacts_client"

export default async function Contacts(){
    const token = await validtoken()
    if(!token){
        redirect("/")
    }
    


    await Connect()
    const contacts_json = await contact.find({user_id:token.id})
    const contacts = JSON.parse(JSON.stringify(contacts_json))
    
    
    return(
        <Contacts_client contacts={contacts}/>
    )
}