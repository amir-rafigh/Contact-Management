// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";
// export async function POST(req) {
//   const data = await req.json();
//   const token = jwt.sign(
//     { email: data.email, id: data.id },
//     process.env.secret_key,
//     { expiresIn: "2d" }
//   );
//   const res = NextResponse.json({error:false , message:"successfully"})
//    res.cookies.set("auth_token" , token , {
//     httpOnly:true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite:"strict",
//     path:"/",
//     maxAge:60*60*24*2
//   })


//   return res;
// }
