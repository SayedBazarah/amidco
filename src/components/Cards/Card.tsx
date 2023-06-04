import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
};

export default function Card({ img, title, description }: Props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        src={img}
        alt={title}
        width={650}
        height={350}
        className="h-[250px] object-contain"
      />
      <h3 className="text-[20px] text-green-900 font-bold mt-10 mb-2">
        {title}
      </h3>
      <p className="text-justify">{description}</p>
    </div>
  );
}
