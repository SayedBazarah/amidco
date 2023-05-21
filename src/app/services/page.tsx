import Card from "@/components/Cards/Card";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Page({}: Props) {
  let contract: {
    title: string;
    description: string;
    img: string;
  }[] = [
    {
      title: "معاينه موقع العمل",
      description:
        "نقوم بمقابلت عمل ونقوم بتحديد والاتفاق علي كافة التفاصيل المطلوبة وتحديدها وتحديد الاسعار ونوع التعاقد متكامل او مصنعية،",
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684596039/alamid/contract_z0xi6r.jpg",
    },
    {
      title: "التعاقد",
      description:
        "بعد تحديد جميع المواصفات ونوع الارضيات الخرسانية وشكلها النهائي، نقوم بكتابه عقد يحتوي علي كافة التفاصيل المتفق عليها حتي يكون مرجع عند التسليم.",
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684596037/alamid/specifications_o72lhm.jpg",
    },
    {
      title: "بداء تنفيذ الاعمال",
      description:
        "يقوم فريق عمل العميد بانزال المعدات والبداء بتجهيز المكان والعمل بشكل مستمر ودقيقة حتي تسليم المشروع بالوقت المتفق عليه.",
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684595991/alamid/work_jwjioe.webp",
    },
    {
      title: "تسليم العمل ",
      description:
        "تسليم الارضيات الخرسانية سواء كانت هليكوبتر او مطبوعة بالمواصفات المطلوبة من قبل العميل والمكتوبة بالعقد",
      img: "https://res.cloudinary.com/dha2m9q8b/image/upload/v1684596273/alamid/Pngtree_real_estate_contract_or_property_5391864_qbscpf.png",
    },
  ];

  return (
    <div className="text-lg max-w-[900px] lg:m-auto m-5">
      <section className="mt-10">
        <div className="text-center mb-5">
          <h1 className="text-3xl mb-3 text-main font-semibold text-green-900">
            انواع الارضيات الخرسانية
          </h1>
          <p className="text-lg text-start">
            نقدم نوعان من الارضيات الخرسانية التي يمكنك استخدامها في منازلك او
            مصنعك او لاي مساحة من الارض تريدها تسويتها او تجهيزها للتحمل احمال
            ثقيلة او استخدام كثيف لهذه الرضيات.
          </p>
        </div>
        <div className=" relative">
          <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-10 bg-black"></div>
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578562/alamid/stamped_bclap8.webp"
            alt="ارضيات خرسانة مطبوعة"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="">
          <h2 className="text-2xl my-3 font-semibold text-green-900">
            ارضيات خرسانية مطبوعة
          </h2>
          <p className="text-lg text-start">
            الارضيات الخرسانية المطبوعة احد اشهر انواع الارضيات التي يمكنك
            استخدامها للحدائق والاماكن المفتوحة والارصفة. يمكنك الاخيار بين
            اشكالها المتنوعة مع امكانية تغيير الوان السطح من لون الخرسانه
            الرصاصي الي اي لون يكون متناسق مع الاماكن المحيطة.
          </p>
        </div>
        <div className="block md:grid ">
          <div>
            <h3 className="text-2xl my-3 font-semibold text-green-900">
              اماكن استخدامها
            </h3>
            <ol className="list-decimal">
              <li className="mr-5">الشوارع</li>
              <li className="mr-5">ممشا الحديقة</li>
              <li className="mr-5">المناطق المحيطة بحمامات السباحة</li>
            </ol>
            <h3 className="text-2xl my-3 font-semibold text-green-900">
              كيف يتم عمل الارضيات الخرسانية المطبوعة
            </h3>
            <p className="">
              اي عمل يتم انشاءه يعتمد جودة المنتج النهائي علي جودة المدخلات لذلك
              فنحن نبدأ باختيار الخرسانات التي تناسب المواصفات الفنية المتفق
              عليها. وياتي بعدها
            </p>
            <ol className="list-decimal">
              <li className=" mr-5 mt-3">تهيئة الصطح</li>
              <li className=" mr-5">صب الارضيه وتسويتها وتركها تتصلب</li>
              <li className=" mr-5">اضافة الالوان وطباعتها.</li>
              <li className=" mr-5">عمل طبقة من الورنيش</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <h3 className="text-green-900 text-2xl my-3 font-semibold ">
            اشكال الخرسانه المطبوعة
          </h3>
          <p className="text-lg text-start">
            يوجد العديد من الاشكال التي يمكن طباعتها علي الارضيات مثل الاشكال
            التالية
          </p>
          <Image
            width={300}
            height={180}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684589383/alamid/1684589370-trimmy-Untitled-5_gwnlju.jpg"
            alt="ارضيات خرسانة مطبوعة"
            className="object-cover m-auto"
          />

          <p className="text-lg text-start">
            اذا كنت تريد معرفة المزيد عن الارضيات الخرسانية المطبوعة وافضل
            المواصفات القياسية يمكنك الانتقال بالضغط علي الزر التالي
          </p>
        </div>
        <div className="mt-10 w-fit mx-auto">
          <Link
            href="/services/stamped-concrete"
            className="text-green-900 border border-green-900 rounded-sm px-10 py-3 mt-10"
          >
            ارضيات خرسانة مطبوعة
          </Link>
        </div>
      </section>
      <section className="mt-10">
        <div className=" relative">
          <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-10 bg-black"></div>
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562623/alamid/helicopter_kk5z7j.webp"
            alt="ارضيات خرسانة مطبوعة"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="my-5">
          <h2 className="text-2xl my-3 font-semibold text-green-900">
            ارضيات خرسانية هليكوبتر
          </h2>
          <p className="">
            الارضيات الخرسانية الهليكوبتر احد اشهر انواع الارضيات التي يمكنك
            استخدامها لارضيات الادوار السفلية او القبو “بادروم” او ارضيات
            المصانع والمحطات البنزين والميناء، وتفضل دائما في الامكان التي يكون
            عليها ضغط كبير لانها تتحمل وسهله التنظيف.
          </p>
        </div>

        <div className="block md:grid md:grid-cols-2 ">
          <div>
            <h3 className="text-2xl my-3 font-semibold text-green-900">
              اماكن استخدامها
            </h3>
            <ol className="list-decimal">
              <li className=" mr-5 ">ارضيات المصانع</li>
              <li className=" mr-5 ">الميناء</li>
              <li className=" mr-5 ">محطات الوقود - بنزينه</li>
              <li className=" mr-5 ">اماكن تحميل الشاحنات</li>
              <li className=" mr-5 ">مهابط طيارة</li>
              <li className=" mr-5 ">الشوارع</li>
              <li className=" mr-5 ">ممشا الحديقة</li>
              <li className=" mr-5 ">المناطق المحيطة بحمامات السباحة</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl my-3 font-semibold text-green-900">
            كيف يتم عمل الارضيات الخرسانية المطبوعة
          </h3>
          <p className="">
            اي عمل يتم انشاءه يعتمد جودة المنتج النهائي علي جودة المدخلات لذلك
            فنحن نبدأ باختيار الخرسانات التي تناسب المواصفات الفنية المتفق
            عليها. وياتي بعدها
          </p>
          <ol className="list-decimal">
            <li className="mr-5 mt-3">تهيئة الصطح</li>
            <li className=" mr-5 ">صب الارضيه واضافة المصلب</li>
            <li className=" mr-5 ">بداء تسويتها بستخدام الهليكوبتر.</li>
            <li className=" mr-5 ">عمل طبقة من الورنيش</li>
          </ol>
        </div>
        <div className="flex flex-col gap-5 items-center text-right mt-5">
          <p className="">
            اذا كنت تريد معرفة المزيد عن الارضيات الخرسانية الهليكوبتر وافضل
            المواصفات القياسية يمكنك الانتقال بالضغط علي الزر التالي
          </p>
          <Link
            href="/services/helicopter-concrete"
            className="text-green-900 border border-green-900 rounded-sm px-10 py-3"
          >
            ارضيات خرسانية هليكوبتر
          </Link>
        </div>
      </section>
      <section className="mt-16 text-center">
        <div className="">
          <h2 className="text-2xl my-3 font-semibold text-green-900">
            انواع التعاقدات
          </h2>
          <p className="">
            يقدم لك افضل خدمات لتوريد وعمل الارضيات الخرسانية سواء كانت ارضيات
            خرسانة مطبوعة او خرسانه هليكوبتر باي مواصفات تطلبها نحن باذن الله
            سنكون عند ثقتك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {contract.map(
            (
              {
                img,
                title,
                description,
              }: {
                img: string;
                title: string;
                description: string;
              },
              i: number
            ) => {
              return (
                <Card
                  key={i}
                  title={title}
                  img={img}
                  description={description}
                />
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}
