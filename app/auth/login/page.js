import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login_container flex justify-center bg-gradient-to-b from-[#5222d0] to-transparent items-center gap-5 w-full h-full">

      <div className="mobile_container w-full">

        <div className="title text-center lalezar text-4xl">
          <h1>ورود به پنل کاربری</h1>
        </div>

        <div className="login_method flex justify-center gap-5 my-4 px-4">
          <button className="bg-[#5222d0] text-white p-2 rounded-lg">ورود با نام کاربری</button>
          <button className="">ورود با شماره موبایل</button>
        </div>

        <form action="" className="fieldset rounded-box p-4">

            <label className="label t">ایمیل</label>
            <input type="email" className="input w-full py-6" name="email" placeholder="ایمیل"  />
            <label className="label">رمز عبور</label>
            <input type="password" className="input w-full py-6" name="password" placeholder="رمز عبور"/>

            <button className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg ">ورود </button>
            <Link href="/auth/register">
              <p className="text-center text-[#5222d0]">هنوز ثبت نام نکرده اید ؟</p>
            </Link>
          
        </form>

      </div>
      <div className="desktop_container hidden sm:block">
        <Image
        src="/image/undraw_access-account_aydp (2).svg"
        width={500}
        height={500}
        objectFit="cover"
        alt="login image"
        />
      </div>

    </div>
  );
}
