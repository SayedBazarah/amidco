import Navigation from "@/components/Headers/nav";
import "./globals.css";
import { Cairo } from "next/font/google";
import Footer from "@/components/Footer/footer";
import { Analytics } from "@vercel/analytics/react";
import CallButton from "@/components/Common/callButton";

const inter = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "amidco",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className=" bg-white  shadow-lg  sticky top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        <div className="relative">
          {children}
          <CallButton />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
