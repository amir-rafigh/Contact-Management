export async function POST(req){
    const formdata = await req.formData()
    // const name = formdata.get("name")
    const values = Object.fromEntries(formdata.entries())
    const{name , firstName , email , phoneNumber , password} = values
    console.log(name , firstName , email , phoneNumber , password);

    

    return Response.json({success : true})
    
}