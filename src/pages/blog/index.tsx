import Link from "next/link";
import { client } from "libs/client";
import { BlogIndexPage } from "@/features/HomePage/blog/BlogIndexPage";
import { createClient } from "microcms-js-sdk";

export default function Blog({ blogs }: { blogs: any }) {
  return <BlogIndexPage blogs={blogs} />;
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
