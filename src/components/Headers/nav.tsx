"use client";
import { useState } from "react";
import { El_Messiri } from "next/font/google";
import Link from "next/link";

const logoFont = El_Messiri({ subsets: ["arabic"] });
type Props = {};

export default function Navigation({}: Props) {
  let [navStatus, setNavStatus] = useState(false);

  return (
    <nav className="max-w-[1000px] m-auto flex justify-between items-center py-2 font-semibold text-green-900">
      <div>
        <Link href="/" className={logoFont.className}>
          <h2 className="text-2xl pr-5">العميد</h2>
        </Link>
      </div>
      <div
        className=" flex flex-col gap-[5px] pl-5 cursor-pointer md:hidden"
        onClick={() => {
          setNavStatus(true);
        }}
      >
        <div className="w-[25px] h-[3px] bg-green-900"></div>
        <div className="w-[25px] h-[3px] bg-green-900"></div>
        <div className="w-[25px] h-[3px] bg-green-900"></div>
      </div>
      <div
        className={
          navStatus
            ? ` fixed left-0 right-0 top-0 bottom-0 flex text-white translate-x-[0px] transition duration-500`
            : `
                fixed left-0 right-0 top-0 bottom-0 flex flex-col translate-x-[-800px] transition duration-500 w-10 
                md:relative md:flex-row md:w-fit md:translate-x-[0px]
            `
        }
      >
        <button
          onClick={() => {
            setNavStatus(false);
          }}
          className={
            navStatus
              ? "block md:hidden w-1/2 bg-green-700 opacity-10"
              : "hidden"
          }
        ></button>
        <ul
          className={
            navStatus
              ? `pr-5 pt-5 w-1/2 h-full flex flex-col gap-3 bg-green-500`
              : `
                h-full flex flex-col gap-3  
                md:relative md:flex-row md:w-fit md:bg-transparent md:text-green-900 md:justify-end items-center md:pt-0 md:ml-5 md:translate-x-[0px]
            `
          }
        >
          <li>
            <button
              className="border border-white flex justify-center items-center w-[25px] h-[25px] rounded-full md:hidden"
              onClick={() => {
                setNavStatus(false);
              }}
            >
              X
            </button>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavStatus(false);
              }}
              href="/services"
              className=" hover:underline underline-offset-[6px]"
            >
              الخدمات
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavStatus(false);
              }}
              href="/services/stamped-concrete"
              className=" hover:underline underline-offset-[6px]"
            >
              خرسانة مطبوعة
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavStatus(false);
              }}
              href="/services/helicopter-concrete"
              className=" hover:underline underline-offset-[6px]"
            >
              خرسانة هليكوبتر
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavStatus(false);
              }}
              href="/blog"
              className=" hover:underline underline-offset-[6px]"
            >
              مقالات
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={() => {
                setNavStatus(false);
              }}
              href="/catalog"
              className=" hover:underline underline-offset-[6px]"
            >
              الكتالوج
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
