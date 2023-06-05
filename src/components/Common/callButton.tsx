"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function CallButton({}: Props) {
  let [open, setOpen] = useState(false);
  const handleCallBtn = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <div className=" fixed left-10 bottom-4">
          <div className="self-end m-3 md:mb-10">
            <div className="flex gap-2  items-center justify-end mb-2">
              <span className="bg-main text-white px-4 py-1">واتس اب</span>
              <a
                href="https://wa.me/201000712170"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/whatsapp.svg" alt="icon" width={64} height={64} />
              </a>
            </div>
            <div className="flex gap-2  items-center justify-end">
              <span className="bg-main text-white px-4 py-1"> هاتف</span>
              <Link href="tel:01000712170" target="_blank">
                <Image
                  src="/phone.svg"
                  alt="icon"
                  width={64}
                  height={64}
                  className="rounded-full "
                />
              </Link>
            </div>
            <div className="flex justify-end">
              <button onClick={handleCallBtn}>
                <Image
                  src="/cancel.svg"
                  alt="icon"
                  width={69}
                  height={69}
                  className=" rounded-full bg-white "
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" fixed left-10 bottom-4">
          <button className=" self-end m-3 md:mb-10" onClick={handleCallBtn}>
            <Image
              src="/phone.svg"
              alt="icon"
              width={64}
              height={64}
              className="border rounded-full border-white"
            />
          </button>
        </div>
      )}
    </>
  );
}
