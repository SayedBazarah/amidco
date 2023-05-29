import path from "path";
import fs from "fs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const data = getPostsTitles();
  console.log(data);
  let staticUrl: { url: string; lastModified: Date }[] = [
    {
      url: `https://alamid.co`,
      lastModified: new Date(),
    },
    {
      url: `https://alamid.co/services`,
      lastModified: new Date(),
    },
    {
      url: `https://alamid.co/services/stamped-concrete`,
      lastModified: new Date(),
    },
    {
      url: `https://alamid.co/services/helicopter-concrete`,
      lastModified: new Date(),
    },
    {
      url: `https://alamid.co/blog`,
      lastModified: new Date(),
    },
  ];
  data.push(...staticUrl);
  console.log(data);
  return data;
}

function getPostsTitles() {
  let sitemap: { url: string; lastModified: Date }[] = [];
  fs.readdirSync(path.join(process.cwd(), "src/posts"), "utf-8")
    .filter((p) => p.replace(/\.md$/, ""))
    .map((p) =>
      sitemap.push({
        url: `https://alamid.co/blog/${p}`,
        lastModified: new Date(),
      })
    );
  return sitemap;
}
