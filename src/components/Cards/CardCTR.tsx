import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  title: string;
  description: string;
  url: string;
};
export default function CardCTR({ img, title, description, url }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={img}
        alt={title}
        width={650}
        height={350}
        className="h-[250px] object-cover"
      />
      <h3 className="text-[20px] text-green-900 font-bold mt-5 mb-2">
        {title}
      </h3>
      <p className="max-w-[650px] text-center">{description}</p>
      <Link
        href={url}
        className=" bg-green-900 text-white px-10 py-[6px] mt-5 rounded-sm"
      >
        تعرف المزيد
      </Link>
    </div>
  );
}
