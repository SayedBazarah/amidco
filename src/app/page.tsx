// src
import Hero from "@/components/Sections/Hero";
import Card from "@/components/Cards/Card";
import CardCTR from "@/components/Cards/CardCTR";

export const metadata = {
  title: "العميد للارضيات الخرسانية",
  description:
    "مكتب متخصص فى اعمال الارضيات الخرسانية مثل الخرسانه الهليكوبتر والخرسانه المطبوعة",
};

export default function Home() {
  const servicesData: { img: string; title: string; description: string }[] = [
    {
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562591/alamid/full_v2vc5e.svg",
      title: "اعمال ارضيات خرسانية متكاملة",
      description:
        "نقوم بجميع العمل عنك فقط تقدم المواصفات المطلوبة للخرسانه، والسمك ونحن نقوم بتوريد وتسوية الخراسة وطباعتها وعمل اللازم ونقوم بتسليمك العمل المطلوب بجميع المواصفات التى تم كتابتها بالعقد.",
    },
    {
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562591/alamid/sub_ebmwwo.svg",
      title: "مصنعية الاعمال",
      description:
        "انت تقدم الخرسانه، والسمك المطلوب ونحن نقدم لك افضل طاقم والمعدات اللازمه ونقوم بتسليمك الارضيات بالمواصفات المطلوبه سواء كانت ارضيات مطبوعة او ارضيات هليكوبتر",
    },
  ];
  const productsData: {
    img: string;
    title: string;
    description: string;
    url: string;
  }[] = [
    {
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562644/alamid/stamped-concrete-pool_om9kfa.jpg",
      title: "ارضيات خرسانية مطبوعة",
      description:
        "الارضيات الخرسانية المطبوعة احد اشهر انواع الارضيات التي يمكنك استخدامها للحدائق والاماكن المفتوحة والارصفة. يمكنك الاخيار بين اشكالها المتنوعة مع امكانية تغيير الوان السطح من لون الخرسانه الرصاصي الي اي لون يكون متناسق مع الاماكن المحيطة.",
      url: "/services/stamped-concrete",
    },
    {
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562623/alamid/helicopter_kk5z7j.webp",
      title: "ارضيات خرسانية هليكوبتر",
      description:
        "الارضيات الخرسانية الهليكوبتر احد اشهر انواع الارضيات التي يمكنك استخدامها لارضيات الادوار السفلية او القبو “بادروم” او ارضيات المصانع والمحطات البنزين والميناء، وتفضل دائما في الامكان التي يكون عليها ضغط كبير لانها تتحمل وسهله التنظيف.",
      url: "/services/helicopter-concrete",
    },
  ];

  return (
    <main className="">
      {/* HERO SECTION */}
      <Hero
        img={
          "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562576/alamid/concrete_ljvdc3.jpg"
        }
      />
      {/* Services */}
      <div className=" max-w-[1200px] xl:m-auto m-5">
        <section className=" my-14">
          <div className=" text-center mb-10">
            <h2 className="text-[24px] font-bold text-green-900">
              الخدمات التى نقدمها
            </h2>
            <p>لدينا نوعين من الخدمات التى يمكنك الاستمتاع بها</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {servicesData.map(
              (
                {
                  img,
                  title,
                  description,
                }: { img: string; title: string; description: string },
                i: number
              ) => {
                return (
                  <Card
                    key={i}
                    img={img}
                    title={title}
                    description={description}
                  />
                );
              }
            )}
          </div>
        </section>
        {/* Products */}
        <section className=" my-14">
          <div className=" text-center mb-10 flex flex-col gap-2 justify-center items-center ">
            <h2 className="text-[24px] font-bold text-green-900">
              انواع الارضيات الخرسانية
            </h2>
            <p className=" max-w-[700px] mx-5 m-auto">
              نقدم نوعان من الارضيات الخرسانية التي يمكنك استخدامها في منازلك او
              مصنعك او لاي مساحة من الارض تريدها تسويتها او تجهيزها للتحمل احمال
              ثقيلة او استخدام كثيف لهذه الرضيات.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 items-start gap-5">
            {productsData.map(
              (
                {
                  img,
                  title,
                  description,
                  url,
                }: {
                  img: string;
                  title: string;
                  description: string;
                  url: string;
                },
                i: number
              ) => {
                return (
                  <CardCTR
                    key={i}
                    img={img}
                    title={title}
                    description={description}
                    url={url}
                  />
                );
              }
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
