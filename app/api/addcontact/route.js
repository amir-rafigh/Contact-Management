import contact from "@/models/contact"
import Connect from "@/utils/connectDB"

export async function POST(req){
    const data = await req.json()
    // const{fistName , lastName , age , phoneNumber , user_id} = data
    await Connect()
    await contact.create(data)
    

    return Response.json({error:false , message:"مخاطب جدید اضافه شد "})
    
}