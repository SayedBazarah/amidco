import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  const style = {
    header: "text-main text-2xl mt-10 mb-5 font-bold",
    h4: "mt-6 mb-3 text-xl font-bold text-main",
    text: "",
  };
  return (
    <div className="text-text text-xl max-w-[900px] lg:m-auto m-5">
      <h1 className="text-[24px] text-center mt-12 text-green-900">
        <strong>ارضيات خرسانة مطبوعة</strong>
      </h1>
      <blockquote className="text-center my-10 border-4 border-green-900 border-dashed p-3 rounded-sm">
        <span className="text-green-900">❞</span> ارضيات{" "}
        <strong>الخرسانة المطبوعة</strong> هيا عبارة عن طبقة من الخرسانة يتم
        طباعتها باشكال تشبه البلاطـ وتتميز عن البلاط بنخفاض سعرها وانها اكثر
        تحملا
        <span className="text-green-900">❝</span>
      </blockquote>
      <div>
        <Image
          width={300}
          height={300}
          src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578562/alamid/stamped_bclap8.webp"
          alt="ارضيات خرسانة مطبوعة"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="mt-5">
        <p className={style.text}>
          الارضيات الخرسانية المطبوعة احد اشهر انواع الارضيات التي يمكنك
          استخدامها للحدائق والاماكن المفتوحة والارصفة. يمكنك الاخيار بين
          اشكالها المتنوعة مع امكانية تغيير الوان السطح من لون الخرسانة الرصاصي
          الي اي لون يكون متناسق مع الاماكن المحيطة.
        </p>
      </div>
      <h3 className={style.header}>
        <strong>أماكن استخدامها</strong>
      </h3>
      <p className={style.text}>
        يمكنك أستخدام الخرسانة المطبوعة لأي ارضيات تحبها لكن هنا اماكن دائما ما
        يفضل استخدامها فيها:
      </p>
      <div className="mt-3 grid gap-4">
        <div className=" ">
          <h4 className={style.h4}>ألشوارع</h4>
          <p>
            يمكن استخدام ارضيات الخرسانة المطبوعة علي جوانب الطرق، مثل طريق
            المشاه وذلك لانها تتحمل الاستخدام وعمرها طويل ويمكن اصلاحها .{" "}
          </p>
        </div>
        <div className=" ">
          <h4 className={style.h4}>ممشا الحديقة</h4>
          <p>
            يمكن استخدام ارضيات الخرسانة المطبوعة علي في ممشا الحديقة وذلك لان
            الوانه مع الوان النجيلة الخضراء والشخر يبهر العين وايضا لانه يتحمل
            الاستخدام وعمرها طويل ويمكن اصلاحها .{" "}
          </p>
        </div>
        <div className=" ">
          <h4 className={style.h4}>المناطق المحيطة بحمامات السباحة</h4>
          <p>
            يمكن استخدام ارضيات الخرسانة المطبوعة علي جوانب حمام السباحة وذلك
            لانها ملمس صطحها ليس املس والذي يمنع الانزلاق بسبب المياه.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center">
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578552/alamid/stamped-concrete-road_tqrlfr.png"
            alt="ارضيات خرسانه مطبوع"
            className="w-full h-full object-cover"
          />
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578549/alamid/stamped-concrete-pool_ztflx4.jpg"
            alt="ارضيات خرسانه مطبوعة "
            className="w-full h-full object-cover"
          />
          <Image
            width={300}
            height={300}
            src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578547/alamid/stamped-concrete-home_doomfp.jpg"
            alt="ارضيات خرسانه مطبوعة"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className={style.header}>
        <strong>مميزات الارضيات الخرسانة المطبوعة</strong>
      </h3>
      <p className={style.text}>
        ربما يتبادر إلى ذهنك الان اذا ما كانت حل مناسباً لك لذلك هذه بعض
        المميزات التى يخبرنا بها عملانا التي تجعلهم يقومو بختيار الخرسانة
        المطبوعه والتي يجب ان تدلك وترشدك اذا ما كانت ارضيات الخرسانة المطبوعة
        مناسبه لك ام يجب عليك الجواء الي خيار اخر:
      </p>
      <h4 className={style.h4}>التكلفة</h4>
      <p className={style.text}>
        تكلفة الارضيات الخرسانية اقل من الجرانيت والبورسلين وسعرها اقل او قريب
        من سعر السيراميك .
      </p>
      <h4 className={style.h4}>قدرة التحمل</h4>
      <p className={style.text}>
        من ناحية الصلابة والتحمل لا يمكن مقارنة الخرسانات باي مواد اخري لانها
        اشد صلابة واكثر تحملنا ويمكنها تحمل اوزان ثقيلة مثل سير سيارات النقل
        عليه دون ان يتاثر، بخلاف السيراميك والبورسلين والرخام الذي سينكسر علي
        الفور في حال.
      </p>
      <h4 className={style.h4}> السطح</h4>
      <p className={style.text}>
        يتميز سطح الارضيات الخرسانية المطبوعة بانه ليس املس لذلك هو خيار جيد
        للمناطق المحيطة بحمامات السباحة او الاماكن التي يمكن ان يمشي عليه افراد
        وقريبه من الماء لتجنب السقوط. لذلك يتم استخدامها لشكله القريب من البلاط
        وسطحة الذي يمنع الانزلاق.
      </p>
      <h4 className={style.h4}>الوقت</h4>
      <p className={style.text}>
        الارضيات الخرسانية بشكل عام هيا الاسرع والاقل احتياجاً للوقت، فيمكن صب
        كميات شاسعة وطباعتها بنفس اليوم، وباليوم التالي يتم عمل طبقة الورنيش
        وينتهي العمل. بخلاف الخيارات الاخري مثل السيراميك والرخام والجرانيت التي
        تطلب وقت اكبر بكثير.
      </p>
      <p className=" text-center my-10 border border-main p-3 rounded-sm">
        باختصار يفضل استخدامها اذا كنت تريد حل بتكلفة قليلة وقدرة عالية علي
        التحمل.
      </p>
      <div className="my-10">
        <Image
          width={300}
          height={300}
          src="https://res.cloudinary.com/dha2m9q8b/image/upload/v1684578547/alamid/stamped-concrete-home_doomfp.jpg"
          alt="ارضيات خرسانه هليكوبتر لجراج.png"
          className="w-[600px] h-[300px] object-cover m-auto"
        />
      </div>

      <h3 className={style.header}>مراحل عمل الارضيات الخرسانية المطبوعة</h3>
      <p className={style.text}>
        في حياتنا لكل هدف نريده مراحل يجب ان نمر بها حتي نصل للهدف، وتختلف
        الجودة النهائية لاي هدف حسب المدخلات وطريقة التي شكلنها بها، وهذا ينطبق
        علي كل شيء، ففي الارضيات الخرسانية المطبوعة نهتم نحن شركة العميد بكل
        تفاصيلها حتي يحصل عملانا علي افضل خدمات للارضيات سواء كانت{" "}
        <Link
          href="/services/hedivcopter-concrete"
          className="text-main text-bold"
        >
          خرسانه ممسوسة بالهليكوبتر
        </Link>{" "}
        او المطبوعة:
      </p>
      <div className="md:grid gap-2">
        <div>
          <div className=" mt-3">
            <h4 className={style.h4}>الخرسانة</h4>
            <p className={style.text}>
              نقوم بختيار الخرسانة المناسبة للمواصفات والمطلبات التي تريدها
              والتي تتوافق مع الشروط الهندسية حتي يحصل عملانا بالنهاية علي
              الجودة التي يبحثوا عنها.
            </p>
          </div>
        </div>

        <div className="">
          <h4 className={style.h4}>تجهيز المكان</h4>
          <p className={style.text}>
            نقود بعدها بتجهيز السطح الذي سيتم صبه بخطوات محدده ثابته تضمن دائما
            ان يكون تنفيذ جميع الاعمال بنفس الجودة.
          </p>
        </div>
        <div className="">
          <div>
            <h4 className={style.h4}>الصب</h4>
            <p className={style.text}>
              بعد التسوية واخذ المناسيب نقوم بصب الخرسانة وتسويتها وتركها حتي
              تتصلب ويمكن طباعتها .{" "}
            </p>
          </div>
        </div>
        <div className="">
          <h4 className={style.h4}>الطباعة</h4>
          <p className={style.text}>
            بعد ان تتماسك البلاطة الخرسانية نقوم باضافة الوان وطباعة الارضية
            بالشكل الذي حدده العميل عن طريق قطع سليكون مجهزة لهذا الغرض،
          </p>
        </div>
        <div className="">
          <h4 className={style.h4}>معالجة وتشطيب</h4>
          <p className={style.text}>
            بعد ترك الارضيات الخرسانية المطبوعة لمده 48 ساعة تكون الخرسانة قد
            تماسكت جيدا نقوم بتنظيف السطح وتقطيع الفواصل بالمنشار واضافة مواد
            مطاطية وبعد ذلك نقوم بعمل طبقة من الورنيش.
          </p>
        </div>
      </div>
      <h4 className={style.h4}>اشكال الارضيات الخرسانية المطبوعة</h4>
      <p className={style.text}>
        يوجد عدد لا محدود من اشكال الارضيات الخرسانية المطبوعة، لانه يمكن تشكيل
        السطح باي طباعة. ولكن يوجد بعض الاشكال المشهورة والتي تجعل الارضيات
        جميلة لانها مئلوفة لنا وهذه بعض صور خرسانية مطبوعة بعد الانتهاء منها،
        والتي يمكن ان تتوقع ان الموقع الذى تريد عمله سيكون بهذه الشكل بعد
        الانتهاء .
      </p>
    </div>
  );
}
