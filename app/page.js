import validtoken from "@/utils/validtoken";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const verify_token = await validtoken();
  if(verify_token){
    redirect("/dashboard")
  }

  return (    
    
    <div className="Container_Contact_home bg-gradient-to-b from-[#5222d0] to-transparent flex flex-col h-full w-full">

    <div className="Contact_home flex flex-col flex-1  justify-center items-center">
        <h1 className=" text-center text-3xl p-0.5 md:text-5xl">مدیریت ساده و امن مخاطبین شما </h1>
        <Image 
        src={"/image/pixeltrue-contact.svg"}
        width={700}
        height={700}
        // fill
        alt="contact management app"
        className="object-cover"
        />

        <div className="btn_container  flex justify-center gap-8 lalezar text-3xl pt-8 md:text-5xl">
          <Link href="/auth/register" className="border-2 border-[#5222d0] p-2 rounded-2xl">ثبت نام</Link>
          <Link href="/auth/login" className="border-2 border-[#5222d0] p-2 rounded-2xl">ورود</Link>
        </div>
    </div>


    <p className="text-center pb-4 sticky bottom-0 ">Developed by  <Link href="https://github.com/amir-rafigh" className="text-[#5222d0]"><span>Amir-rafigh</span></Link> ©2025</p>

    </div>
    
    
  );
}
