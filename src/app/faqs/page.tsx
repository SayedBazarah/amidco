import Question from "@/components/Cards/question";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  let questions = [
    {
      question: "من هيا شركة العميد للارضيات الخرسانية",
      answer: (
        <p>
          نحن مكتب مقاولات متخصص في الارضيات الخرسانية، سواء كانت ارضيات خرسانة
          مطبوعة او كانت ارضيات خرسانة هليكوبتر
        </p>
      ),
    },
    {
      question: "الخدمات التي نقدمها",
      answer: (
        <p>
          الخدمات التي نقدمها متخصصة في الارضيات المصنوعة من الخرسانة، وهيا تشمل
          نوعين الاول{" "}
          <span className=" font-bold text-slate-700">خرسانة مطبوعة</span> وهيا
          عبارة عن طبقة من الخرسانة يتم طباعتها باي شكل تريده ويمكنك معرفة
          المزيد عنها من خلال{" "}
          <Link
            href="/services/stamped-concrete"
            className=" font-bold text-slate-700"
          >
            الضغط هنا
          </Link>{" "}
          <br />
          النوع الثاني هو{" "}
          <span className=" font-bold text-slate-700">
            ارضيات الخرسانة الممسوسة بالهليكوبتر{" "}
          </span>{" "}
          وهيا النوع الثانى الذي نقدمة وتكون ذات سطج املس . ويمكنك معرفة المزيد
          عنها من خلال{" "}
          <Link
            href="/services/helicopter-concrete"
            className=" font-bold text-slate-700"
          >
            الضغط هنا
          </Link>{" "}
        </p>
      ),
    },
    {
      question: "سعر الخرسانة المطبوعة",
      answer: (
        <p>
          تختلف اسعار الخرسانة المطبوعة بختلاف المواصفات المطلوبة والسمك وحجم
          الاعمال المطلوب تنفيذها واسعار المواد لان بها تغير سريع، لذلك يمكنك
          الاتصال بنا علي{" "}
          <a
            href="https://wa.me/201000712170"
            target="_blank"
            className="font-bold text-slate-800"
          >
            01000712170 📞
          </a>{" "}
          لمعرفة اخر اسعار ارضيات الخرسانة المطبوعة{" "}
        </p>
      ),
    },
    {
      question: "سعر متر خرسانة هليكوبتر",
      answer: (
        <p>
          يختلف سعر متر الخرسانة الهليكوبتر بختلاف المواصفات المطلوبة والسمك
          وحجم الاعمال ومكانها وسعر مواد الانشاء في الفترة المراد التنفيذ بها
          لان بها تغير سريع في الفترة الماضية، لذلك يمكنك الاتصال بنا علي{" "}
          <a
            href="https://wa.me/201000712170"
            target="_blank"
            className="font-bold text-slate-800"
          >
            01000712170 📞
          </a>{" "}
          لمعرفة اخر سعر متر خرسانة هليكوبتر{" "}
        </p>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mt-14 mb-10">الاسئلة الشائعة</h1>

      <div className="flex flex-col gap-4 ">
        {questions.map((q, i) => (
          <Question key={i} qestion={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}
