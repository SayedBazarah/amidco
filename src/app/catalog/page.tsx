"use client";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  return (
    <section className="flex h-screen justify-center items-center">
      <HTMLFlipBook
        className=""
        startPage={0}
        size="stretch"
        width={450}
        height={500}
        maxHeight={500}
        maxWidth={450}
        minHeight={100}
      >
        {/* COVER */}
        <div className=" ">
          <div className="border-r border-white  flex-col text-2xl font-bold text-white text-center w-full h-full flex gap-5 justify-center items-center bg bg-green-500 ">
            <div className="text-4xl">العميـــد للخـرســانــة </div>
            <div>المطبوعة والهليكوبتر</div>
          </div>
        </div>
        <div className=" ">
          <div className="flex-col text-2xl font-bold text-white text-center w-full h-full flex gap-5 justify-center items-center bg bg-green-500 ">
            <div className=" text-justify">
              <div className="mb-5">المحتوي</div>
              <div className=" text-lg font-normal">1. نبذة عن الشركة</div>
              <div className=" text-lg font-normal">2. الارضيات المطبوعة</div>
              <div className=" text-lg font-normal">3. الارضيات الهليكوبتر</div>
              <div className=" text-lg font-normal">4. المشاريع السابقة</div>
            </div>
          </div>
        </div>

        {/* PAGE 1 */}
        <div className=" ">
          <div className="  flex-col text-2xl font-bold text-white text-center w-full h-full flex gap-5 justify-center items-center bg bg-green-500 border-r border-green-200">
            <Image
              width={450}
              height={500}
              src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578547/alamid/stamped-concrete-home_doomfp.jpg"
              alt="ارضيات خرسانه هليكوبتر لجراج.png"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className=" ">
          <div className="  flex-col text-2xl font-bold text-white text-center w-full h-full flex gap-5 justify-center items-center bg bg-green-500 border-r border-green-200">
            <div className="">شـــــــــــــــــــــركـــة</div>
            <div>العميـــد للخـرســانــة </div>
            <div>المطبوعة والهليكوبتر</div>
          </div>
        </div>
        {/* PAGE 2 */}
      </HTMLFlipBook>
    </section>
  );
}
