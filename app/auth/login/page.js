import Image from "next/image";

export default function Login() {
  return (
    <div className="login_container flex justify-center items-center gap-5">

      <div className="mobile_container">
        <div className="title text-center lalezar text-4xl">
          <h1>ورود به حساب کاربری</h1>
        </div>

        <form action="" className="fieldset bg-base-200 border-[#3f3d58]  rounded-box w-xs border-2 p-4">
               

            <legend className="fieldset-legend text-3xl">ورود </legend>

            <label className="label">ایمیل</label>
            <input type="email" className="input" name="email" placeholder="ایمیل"  />
            <label className="label">رمز عبور</label>
            <input type="password" className="input" name="password" placeholder="رمز عبور"/>

            <button>ورود </button>


          
        </form>

      </div>
      <div className="desktop_container">
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
