import Image from "next/image";
import Link from "next/link";

type Props = { img: string };

export default function Hero({ img }: Props) {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-black opacity-30 z-10"></div>
      <div className="absolute left-0 right-0 w-full h-full md:w-4/5 m-auto p-3 md:p-10 z-20 text-white font-bold flex items-center justify-center md:items-start flex-col text-center md:text-start">
        <h1 className="text-[24px] md:text-[38px]">
          العميد للخرسانه الهليكوبتر والمطبوعة
        </h1>
        <p className="w-full md:w-1/2 font-normal">
          مكتب متخصص فى اعمال الارضيات الخرسانية مثل الخرسانه الهليكوبتر
          والخرسانه المطبوعة
        </p>
        <a
          target="_blank"
          href="https://www.drive.google.com/file/d/18KQ0GGS_l7jw7cqbZjZlMEQhWOZbgTTU/view"
          className="mt-5 bg-white text-green-900 px-10 py-[7px] rounded-sm hover:bg-green-900 hover:text-white"
        >
          الكتالوج
        </a>
      </div>
      <Image
        src={img}
        alt="العميد للارضيات الخرسانية الهليكوبتر والمطبوعة"
        width={1200}
        height={600}
        className="max-h-[450px] w-full object-cover scale-x-[-1] "
      />
    </div>
  );
}
