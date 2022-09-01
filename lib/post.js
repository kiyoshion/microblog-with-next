import path from "path";
import fs from "fs";
import matter from "matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult,
    }
  })
}
