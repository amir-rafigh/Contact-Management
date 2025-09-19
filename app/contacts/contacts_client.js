"use client";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import axios from "axios";
export default function Contacts_client({ contacts }) {
  console.log(contacts);
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="contacts_container w-full h-full">
      <header className="">
        <div
          className={`${
            sidebar ? "bg-white " : ""
          } sidebar_dashboard fixed h-full `}
        >
          <span
            className=" block text-3xl pt-5 pr-4 md:hidden"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <IoMdClose /> : <FaBars />}
          </span>
          <aside
            className={`${
              sidebar ? "block inset-0 z-40 w-64" : "hidden"
            } md:block sidebar  bg-white shadow-lg h-full `}
          >
            <nav className="pr-4">
              <h2 className="text-4xl font-semibold mb-4 lalezar whitespace-nowrap px-2">
                مدیریت مخاطبین
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/dashboard"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    پروفایل
                  </a>
                </li>
                <li>
                  <a
                    href="/addcontact"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    اضافه کردن مخاطب
                  </a>
                </li>
                <li>
                  <a
                    href="/contacts"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    لیست مخاطبین
                  </a>
                </li>
                <li className="absolute bottom-0">
                  <a
                    href="/contacts"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    خروج
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className="title">
          <h1 className=" text-center lalezar text-3xl pt-4">
            اضافه کردن مخاطبین{" "}
          </h1>
        </div>
      </header>
      <main>
        <section className="bg-red-500 min-h-screen flex flex-col gap-5 justify-center items-center">
            {contacts.map((item , index)=>(
                <dl className="grid grid-cols-2">
                
                <dt>نام : </dt>
                <dd>{item.firstName}</dd>
    
                <dt>نام خانوادگی :</dt>
                <dd>{item.lastName}</dd>
    
                <dt>سن : </dt>
                <dd>{item.age}</dd>
    
                <dt>شماره موبایل :</dt>
                <dd>{item.phoneNumber}</dd>
            </dl>     
                
            ))}
        </section>

      </main>
    </div>
  );
}
function Submisson() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-neutral mt-4 bg-[#5222d0]">
      {pending ? "منتظر باشید ...." : "ثبت "}
    </button>
  );
}
