import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="border-t-[1px] border-green-800 mt-10 pt-3">
      <footer className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] m-auto px-5 overflow-hidden">
        <section className=" ">
          <h4 className="font-bold text-xl mb-3">الخدمات</h4>
          <ul>
            <li>
              <Link href="/services/stamped-concrete">
                ارضيات خرسانة مطبوعة
              </Link>
            </li>
            <li>
              <Link href="/services/helicopter-concrete">
                ارضيات خرسانة هليكوبتر
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <h4 className="font-bold text-xl mb-3">روابط مهمة</h4>
          <ul>
            <li>اسئلة شائعة</li>
            <li>سياسة الخصوصية</li>
            <li>
              <Link href="/sitemap.xml">خريطة الموقع</Link>
            </li>
          </ul>
        </section>
        <section className="">
          <h4 className="font-bold text-xl mb-3">للاستفسار</h4>
          <p>هاتف: 01000712170</p>
          <p>البريد الالكتروني: info@alamid.co</p>
        </section>
        <section className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9827647323364!2d31.313673175296532!3d30.008651274941602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839965bdd2345%3A0x3199459ee8d0a647!2z2KfZhNi52YXZitivINmE2YTYrtix2LPYp9mG2Ycg2KfZhNmH2YTZitmD2YjYqNiq2LEg2YjYp9mE2YXYt9io2YjYudip!5e0!3m2!1sen!2seg!4v1685342710177!5m2!1sen!2seg"
            loading="lazy"
          ></iframe>
        </section>
      </footer>
      <div className="text-center text-white bg-green-800  py-3 mt-5">
        Developed by{" "}
        <a href="https://linkedin.com/in/sayedbazarah" target="_blank">
          @Sayed Mohamed
        </a>
      </div>
    </div>
  );
}
