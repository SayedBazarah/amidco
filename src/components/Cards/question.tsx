"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  qestion: string;
  answer: JSX.Element;
};

export default function Question({ qestion, answer }: Props) {
  let [active, setActive] = useState(false);

  return (
    <div className="relative w-full max-w-[500px] mx-5 ">
      {/* Question */}
      <summary
        onClick={() => {
          setActive(!active);
        }}
        className="rounded-md w-[500px] cursor-pointer flex justify-between   p-4 shadow-lg"
      >
        <h2 className=" font-semibold">{qestion}</h2>
        <div className=" relative flex">
          <div
            className={
              active
                ? " opacity-0 duration-500"
                : " opacity-1 duration-500 rounded-sm absolute left-2 top-0  w-1 h-5 bg-slate-900"
            }
          ></div>
          <div className="rounded-sm absolute left-0 top-2  w-5 h-1 bg-slate-900"></div>
        </div>
      </summary>
      {/* Answer */}
      <div
        className={
          active
            ? "relative opacity-1 duration-500 rounded-md w-full flex gap-5 justify-between p-5 pt-10  mt-1  shadow-xl"
            : "absolute opacity-0 duration-500 right-0  -z-10"
        }
      >
        <div>
          <Image
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1685513787/alamid/1671018822210_fczdl8.jpg"
            alt="CEO of Al Amid"
            width={50}
            height={50}
            className=" rounded-full"
          />
        </div>
        <div className="w-[90%] text-slate-500 text-justify">{answer}</div>
      </div>
    </div>
  );
}
