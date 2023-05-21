import fs from "fs";
import ReactMarkdown from "react-markdown";
type Props = {
  message: string;
};

export default async function Page(props: Props) {
  console.log("POST");
  const postData = await GetMarkDownFile("concrete");
  if (!postData) return <div>Loading</div>;
  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown>{postData}</ReactMarkdown>
    </article>
  );
}

//Read Markdown file
export async function GetMarkDownFile(fileName: string) {
  try {
    return fs.readFileSync(
      `${process.cwd()}/src/posts/${fileName}.md`,
      "utf-8"
    );
  } catch (err) {
    return "no data";
  }
}
