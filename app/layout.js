import { Vazirmatn , Lalezar } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  variable:"--font-vazir",
  subsets:["arabic"],
  weight:["600"]
})
const lalezar = Lalezar({
  variable:"--font-lalezar",
  subsets:["arabic"],
  weight:["400"]

})

export const metadata = {
  title: "Contact management",
  description: "ساده‌ترین و امن‌ترین راه برای مدیریت، ذخیره و سازماندهی مخاطبین شما با رابط کاربری مدرن و روان.",
  authors:[{name:"amir-rafigh"}],
  icons:{
    icon:"/favIcon/contact-information.png"
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable} ${lalezar.variable} antialiased flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
