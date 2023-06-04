import path from "path";
import fs from "fs";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Link from "next/link";

type Props = {
  params: { title: string | number };
  searchParams: {};
};

export const metadata = {
  title: "",
  description:
    "مكتب متخصص فى اعمال الارضيات الخرسانية مثل الخرسانه الهليكوبتر والخرسانه المطبوعة",
};

export default async function Page(props: Props) {
  const { data, content }: any = await GetMarkDownFile(props?.params?.title);

  if (data === undefined)
    return (
      <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-5 text-xl ">
        <p>لا يوجد مقال بهذا الاسم</p>
        <Link href="/blog" className="bg-green-700 text-white py-2 px-5">
          تصفح جميع المقالات
        </Link>
      </div>
    );
  return (
    <>
      <h1 className=" text-center text-3xl font-bold my-5 md:my-10 lg:my-14">
        {data?.title}
      </h1>
      <div className=" max-w-[1100px] mx-5 md:mx-10 lg:mx-14 xl:mx-auto bg-white shadow-xl rounded-t-3xl">
        <article className="prose lg:prose-xl min-w-full shadow-inner  rounded-t-3xl">
          <ReactMarkdown className="  px-10 flex flex-col justify-center">
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
}

//Read Markdown file
function GetMarkDownFile(fileName: string | number) {
  try {
    let fileData = fs.readFileSync(
      `${process.cwd()}/src/posts/${fileName}.md`,
      "utf-8"
    );
    const { data, content } = matter(fileData);

    return { data, content };
  } catch (err) {
    return { value: "no data" };
  }
}

function getPostsTitles() {
  const dir = path.join(process.cwd(), "src/posts");
  const posts = fs
    .readdirSync(dir, "utf-8")
    .filter((p) => p.replace(/\.md$/, ""));
  return posts;
}
export async function generateStaticParams() {
  let paths: { title: string }[] = [];
  await getPostsTitles().map((p) => paths.push({ title: p }));
  return paths;
}
