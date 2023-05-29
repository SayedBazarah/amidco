import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="text-text text-xl max-w-[900px] lg:m-auto m-5">
      <div>
        <h1 className="text-[24px] text-center mt-12 text-green-900">
          <strong>ارضيات خرسانة ممسوسة هليكوبتر</strong>
        </h1>
        <blockquote className="text-center my-10 border-4 border-green-900 border-dashed p-3 rounded-sm">
          <span className="text-green-900">❞</span> الارضيات{" "}
          <span className=" font-bold ">الخرسانية الممسوسة بالهيكوبتر</span> هيا
          نوع من الارضيات الخرسانية ذات سطح مستوي وناعم تصمم لسيرة مركبات النقل
          الثقيل او ارضيات الجراج
          <span className="text-green-900">❝</span>
        </blockquote>
        <div>
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684562623/alamid/helicopter_kk5z7j.webp"
            alt="ارضيات خرسانة مطبوعة"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="mt-5">
          <p className="">
            الارضيات الخرسانية الهليكوبتر احد اشهر انواع الارضيات التي يمكنك
            استخدامها لارضيات الادوار السفلية او القبو “بادروم” او ارضيات
            المصانع والمحطات البنزين والميناء، وتفضل دائما في الامكان التي يكون
            عليها ضغط كبير لانها تتحمل وسهله التنظيف.
          </p>
        </div>
        <h3 className="text-main text-2xl mt-10 mb-5">
          <strong>اماكن استخدامها</strong>
        </h3>
        <p className="">
          يمكنك استخدام الخرسانة المطبوعة لاي ارضيات تحبها لكن هنا اماكن دائما
          ما يفضل استخدامها فيها:
        </p>
        <div className="grid gap-5 mt-5">
          <div className="md:grid ">
            <div>
              <h4 className="mt-6 mb-3 text-xl font-bold text-main">الشوارع</h4>
              <p>
                تستخدم ارضيات الخرسانه الهليكوبتر علي جوانب الطرق، طريق المشاه
                وذلك لانها تتحمل الاستخدام وعمرها طويل ويمكن اصلاحها
              </p>
            </div>
          </div>
          <div className="md:grid  ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              اماكن تحميل الشاحنات
            </h4>
            <p>
              اماكن تحميل الشاحنات دائما ما تحتاج الي مواد يمكنها تحمل سير
              مركبات ذات اوزان كبيره بالاضافة الي مواد يمكنها التحميل لفترات
              طويله مع امكانية اصلاحها وذلك ما توفرة ارضيات الخرسانه الهليكوبتر
            </p>
          </div>

          <div className="md:grid  ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              ارضيات المصانع
            </h4>
            <p>
              تستخدم الخرسانه الهليكوبتر لارضيات المصانع وذلك لانها حل مثالي
              وذلك لانها تتحمل اوزان اجهزت ومكينات التصنيع والتي تكون اوزانها
              اطنان بالاضافة الي سهولة االتحرك عليها للموظفين وتكلفة جيده
            </p>
          </div>
          <div className="md:grid  ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              مهابط طيارة
            </h4>
            <p>
              الطائرات تحتاج الي ارض صلبه مستوية حتي تتمكن من الهبوط بسلاسه
              وامان لذلك يتجه المصممون الي استخدام الخرسانه الهليكوبتر وذلك لان
              سطحها مستوي بالاضافة الي انها تتحمل وزن الطائرة
            </p>
          </div>
          <div className="md:grid  ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              محطات الوقود - بنزينه
            </h4>
            <p>
              ارضيات الخرسانه الهليكوبتر مميزة جدا لارضيات محطات الوقود وذلك
              لانها سهله التنظيف ويمكن اصلاحها بالاضافة الي انها تتحمل سير
              المركبات المختلفة عليها وعمره الافتراضي كبير لذلك هيا مفضلة{" "}
            </p>
          </div>
          <div className="md:grid  ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">الميناء</h4>
            <p>
              تستخدم الخرسانات الهليكوبتر لارضيات الميناء لانها تتحمل وضع
              الحويات فوقها ووضع اكثر من حاوية بشكل افقي وذلك يساعد علي توفير
              الاماكن واستغلالها
            </p>
          </div>
          <div className="md:grid  ">
            <div>
              <h4 className="mt-6 mb-3 text-xl font-bold text-main">
                ممشا الحديقة
              </h4>
              <p>
                تستخدم ارضيات الخرسانه الهليكوبتر مع
                <Link
                  href="/services/stamped-concrete"
                  className="text-main text-bold"
                >
                  الخرسانه المطبوعة
                </Link>
                علي جوانب الطرق، طريق المشاه وذلك لانها تتحمل الاستخدام وعمرها
                طويل ويمكن اصلاحها
              </p>
            </div>
          </div>
          <div className="md:grid  ">
            <div>
              <h4 className="mt-6 mb-3 text-xl font-bold text-main">
                ارضيات الجراج
              </h4>
              <p>
                يقوم المصممون دائماً بستخدام الخرسانه الهليكوبتر لارضيات الادوار
                الارضيه والجراجات وذلك لانها تستحمل سير السيارات والمركبات عليها
                بالاضافة الي انه يمكن طباعة ارشادات عليها لتساعد في تنظيم المكان
                وتساعد اصحاب المركبات علي ايقاف مركباتهم في الامكان الصحيحه حتي
                يتم استخدام المكان بشكل جيد
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center">
            <Image
              width={300}
              height={300}
              src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578629/alamid/garag_vlzafz.webp"
              alt="ارضيات خرسانه هليكوبتر لجراج.png"
              className="w-full h-full object-cover"
            />
            <Image
              width={300}
              height={300}
              src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578628/alamid/airstrip_dj2iri.jpg"
              alt="ارضيات خرسانه هليكوبتر لجراج.png"
              className="w-full h-full object-cover"
            />
            <Image
              width={300}
              height={300}
              src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578627/alamid/petrolstation_pbk9br.jpg"
              alt="ارضيات خرسانه هليكوبتر لجراج.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-main text-2xl mt-10 mb-5">
          <strong>مميزات الارضيات الممسوسة</strong>
        </h3>
        <p className="">
          ربما يتبادر بذهنك اذا ما كانت الارضيات الممسوسة بالهليكوبتر حلً
          مناسباً لك، لذلك هذه بعض المميزات التى اخبرنا بها عملانا والتي جعلتهم
          يفضلون الارضيات الممسوسة والتي يجب ان تدلك وترشدك اذا ما كانت ارضيات
          الخرسانة الهليكوبتر مناسبة لك ام الجوء الي خيار اخر:
        </p>
        <h4 className="mt-6 mb-3 text-xl font-bold text-main">الوقت</h4>
        <p className="">
          الارضيات الخرسانية بشكل عام هيا الاسرع والاقل احتياجاً للوقت، فيمكن صب
          كميات شاسعة وطباعتها بنفس اليوم، وباليوم التالي يتم عمل طبقة الورنيش
          وينتهي العمل. بخلاف الخيارات الاخري مثل السيراميك والرخام والجرانيت
          التي تطلب وقت اكبر بكثير.
        </p>
        <h4 className="mt-6 mb-3 text-xl font-bold text-main">التكلفة</h4>
        <p className="">
          تكلفة الارضيات الخرسانية ارخص بكثر من الايبوكسي او الجرانيت.
        </p>
        <h4 className="mt-6 mb-3 text-xl font-bold text-main"> قدرة التحمل</h4>
        <p className="">
          من ناحية الصلابة والتحمل لا يمكن مقارنة الخرسانات باي مواد اخري لانها
          اشد صلابة واكثر تحملنا ويمكنها تحمل اوزان ثقيلة مثل سير سيارات النقل
          عليه دون ان يتاثر، بخلاف السيراميك والبورسلين والرخام الذي سينكسر علي
          الفور في حال.
        </p>
        <h4 className="mt-6 mb-3 text-xl font-bold text-main">السطح</h4>
        <p className="">
          يتميز سطح الارضيات الخرسانية الممسوسة بالهليكوبتر بكونه ليس زلق
          باختصار يفضل استخدامها اذا كنت تريد ارضيات بقدرة عالية علي تحمل
          الاوزان الثقيلة وسير المركبات.
        </p>
        <div className="my-10">
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578630/alamid/concrete-polishing_cpbolx.jpg"
            alt="ارضيات خرسانه هليكوبتر لجراج.png"
            className="w-[600px] h-[300px] object-cover m-auto"
          />
        </div>
        <h3 className="text-main text-2xl mt-10 mb-5 font-bold">
          مراحل عمل الخرسانية الممسوسة
        </h3>
        <p className="">
          في حياتنا لكل هدف نريده مراحل يجب ان نمر بها حتي نصل، وتختلف الجودة
          النهائية لاي هدف حسب المدخلات وطريقة التي شكلنها بها، وهذا ينطبق علي
          كل شيء، ففي الارضيات الخرسانية الممسوسة نهتم نحن شركة العميد بكل
          تفاصيلها بداية من:
        </p>
        <div className="md:grid gap-2">
          <div className="md:grid  mt-3">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">الخرسانة</h4>
            <p className="">
              نقوم بختيار الخرسانه المناسبة للمواصفات والمطلبات التي تريدها
              والتي تتوافق مع الشروط الهندسية حتي يحصل عملانا بالنهاية علي
              الجودة التي يبحثوا عنها.
            </p>
          </div>

          <div className="md:grid ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              تجهيز المكان
            </h4>
            <p className="">
              نقود بعدها بتجهيز السطح الذي سيتم صبه بخطوات محدده ثابته تضمن
              دائما ان يكون تنفيذ جميع الاعمال بنفس الجودة.
            </p>
          </div>
          <div className="md:grid ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">الصب</h4>
            <p className="">
              بعد التسوية واخذ المناسيب نقوم بصب الخرسانة وتسويتها وتركها حتي
              تتصلب ويمكن طباعتها
            </p>
          </div>
          <div className="md:grid ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">التسوية</h4>
            <p className="">
              بعد ان تتماسك البلاطة الخرسانية نقوم بالبداء في تسويتها وجعل سطحها
              املس بستخدام مكينات الهليكوبتر
            </p>
          </div>
          <div className="md:grid ">
            <h4 className="mt-6 mb-3 text-xl font-bold text-main">
              معالجة وتشطيب
            </h4>
            <p className="">
              بعد ترك الارضيات الخرسانية المطبوعة لمده 48 ساعة تكون الخرسانة قد
              تماسكت جيدا نقوم بتنظيف السطح وتقطيع الفواصل بالمنشار واضافة مواد
              مطاطية وبعد ذلك نقوم بعمل طبقة من الورنيش.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
