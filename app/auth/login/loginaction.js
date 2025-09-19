// "use server";

// import user from "@/models/user";
// import Connect from "@/utils/connectDB";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// export default async function loginAction(prevState, formData) {
//   const values = Object.fromEntries(formData.entries());
//   const { password, email } = values;
//   if (!password || !email) {
//     return { error: true, message: "ابتدا شما باید فیلد هارا پر کنید " };
//   }
//   await Connect();
//   const isUser = await user.findOne({ email });

//   if (!isUser) {
//     return {
//       error: true,
//       message: "شما هنوز ثبت نام انجام نداده اید ",
//       values,
//     };
//   }
//   const validPassword = await bcrypt.compare(password, isUser.password);
//   if (!validPassword) {
//     return {
//       error: true,
//       message: "ایمیل یا رمز عبور شما اشتباه هست ",
//       values,
//     };
//   }

//   const token = jwt.sign(
//     { email: isUser.email, id: isUser._id.toString() },
//     process.env.secret_key,
//     { expiresIn: "2d" }
//   );
//   cookies().set("auth_token" , token ,{
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 2,
//   })


//   //   const is_validtoken = await fetch("http://localhost:3000/api/auth/login" , {
//   //     method:"POST",
//   //     body: JSON.stringify({email:isUser.email , id:isUser._id.toString()}),
//   //     headers: { "Content-Type": "application/json" },
//   //   })
//   //   const validtoken = await is_validtoken.json()
//   //   console.log(validtoken);

//   return { error: false, message: "شما با موفقیت ورود کردید", values };
// }
