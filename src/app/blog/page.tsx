import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs";
type Props = {};

export default async function Page({}: Props) {
  const posts = await getAllPosts();
  if (!posts)
    return (
      <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-5 text-xl ">
        <p>لا يوجد مقال </p>
      </div>
    );
  return (
    <div>
      <div className="text-center my-10">
        <h1 className=" text-[28px] font-bold text-green-900">نصائح وافكار </h1>
        <p>عن الارضيات الخرسانية المطبوعة والهليكوبتر</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[90vw] max-w-[1100px] mx-auto">
        {posts.map((post) => {
          return (
            <Link
              href={`/blog/${post.file}`}
              className="hover:shadow-2xl shadow-lg rounded-sm"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={350}
                height={200}
                className="w-full object-cover max-h-[250px]"
              />
              <div className="px-3 pb-4 ">
                <h3 className=" font-bold pt-3 pb-1">{post.title}</h3>
                <p className="text-[14px] text-gray-600">{post.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function getAllPosts() {
  //Array for storing All posts data
  const postsData: {
    title: string;
    description: string;
    img: string;
    file: string;
  }[] = [];

  //create the dir/path to /posts folder and read all posts/.md files
  const dir = path.join(process.cwd(), "src/posts");
  const dirFiles = fs
    .readdirSync(dir, "utf-8")
    .filter((p) => p.replace(/\.md$/, ""));
  //loop throw /posts folder files
  dirFiles.map((file) => {
    const path = `${dir}/${file}`;

    const fileData = fs.readFileSync(path, "utf-8");
    const { data } = matter(fileData);
    postsData.push({
      title: data.title,
      description: data.description,
      img: data.img,
      file: file.replace(/\.md$/, ""),
    });
  });

  return postsData;
}
