import Image from "next/image";

export default function Register() {
  return (
    <div className="register_container flex  justify-center align-items-center">

      <div className="mobile_container flex flex-col h-full justify-center gap-5">
        <div className="title text-center lalezar text-4xl">
          <h1>مدیریت مخاطب های شما</h1>
        </div>

        <form action="/api/auth/register" method="POST" className="fieldset bg-base-200  rounded-box w-xs border-2 p-4">
               

            <legend className="fieldset-legend text-3xl">ثبت نام</legend>

            <label className="label">نام</label>
            <input type="text" className="input" name="name" placeholder="نام" />

            <label className="label">نام خانوادگی</label>
            <input type="text" className="input" name="firstName" placeholder="نام خانوادگی" />

            <label className="label">ایمیل</label>
            <input type="email" className="input" name="email" placeholder="ایمیل" />

            <label className="label">شماره تلفن</label>
            <input type="number" className="input" name="phoneNumber" placeholder="شماره تلفن" />

            <label className="label">رمز عبور</label>
            <input type="password" className="input" name="password" placeholder="رمز عبور" />

            <button className="btn btn-neutral mt-4 bg-[#5222d0]">
              ثبت نام{" "}
            </button>
        </form>
      </div>



      
      <div className="desktop_container hidden sm:block sm:flex">
            <Image 
            src="/image/undraw_sign-up_z2ku.svg"
            width={500}
            height={500}
            objectFit="cover"
            alt="register image"
            />
        </div>



    </div>
  );
}
