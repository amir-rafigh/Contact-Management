import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export default async function validtoken(){
    try{
        const cookiesStore = await cookies()
        const token = cookiesStore.get("auth_token")
        if(!token){
            return false
        }
        const payload = jwt.verify(token.value , process.env.secret_key)        
        return payload
        

    }catch(err){
        return false
    }


}