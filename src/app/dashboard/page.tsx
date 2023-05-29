import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="  h-[90vh] flex justify-center items-center">
      <form className="w-[420px] h-fit m-auto flex flex-col gap-7 text-text">
        <div className="flex flex-col gap-2 ">
          <p className=""> البريد الالكتروني</p>
          <input
            type="email"
            className="h-[45px] border-[1px] border-border focus:outline-none focus:border-main  px-3"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <p> كلمة المرور</p>
          <div className="flex items-center border-[1px]  border-border  focus:border-main ">
            <input
              type="password"
              className="h-[45px] w-full outline-none px-3"
            />
            <Link href="/dashboard" className="w-[180px] pl-1">
              نسيت كلمة السر
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="submit"
            value="تسجيل الدخول"
            className=" cursor-pointer bg-gray-900 text-white px-5 py-2 "
          />
          <Link href="/dashboard" className=" ">
            انشاء حساب جديد
          </Link>
        </div>
      </form>
    </div>
  );
}
