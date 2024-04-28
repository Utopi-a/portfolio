import { useMediaQuery } from "@mantine/hooks";
import { Footer } from "src/features/HomePage/_components/Footer";
import { Header } from "src/features/HomePage/_components/Header";
import {
  Text,
  Image,
  Box,
  Center,
  Avatar,
  Container,
  Stack,
  ThemeIcon,
  Group,
  Anchor,
  Title,
  Space,
  Divider,
  AppShell,
  Affix,
} from "@mantine/core";
import { client } from "libs/client";
import Link from "next/link";
import parse from "html-react-parser";
import { createClient } from "microcms-js-sdk";
import { motion } from "framer-motion";
import { TweetBlogButton } from "@/features/HomePage/blog/_components/TweetBlogButton";
import * as cheerio from "cheerio";

export default function BlogId({ blog }: { blog: any }) {
  // console.log(blog);
  const matches = useMediaQuery("(min-width: 768px)");
  const showToc = useMediaQuery("(max-width: 1650px)");

  // console.log(showToc);

  const publishedDate = new Date(blog.publishedAt);
  const updatedDate = new Date(blog.updatedAt);
  const formattedPublishedDate = `${publishedDate.getFullYear()}/${publishedDate.getMonth() + 1}/${publishedDate.getDate()}`;
  const formattedUpdatedDate = `${updatedDate.getFullYear()}/${updatedDate.getMonth() + 1}/${updatedDate.getDate()}`;

  const $ = cheerio.load(blog.content);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data) => {
    if (data.children[0].type === "text") {
      return {
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name,
      };
    }
  });

  console.log(toc);

  return (
    <Stack align="stretch" justify="space-between" mih="100vh">
      <Box>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <AppShell>
            <Box
              maw={800}
              p={"10px 20px"}
              m={"0px auto 20px auto"}
              c="rgb(32, 16, 12)"
            >
              <Center>
                <Title order={1} mt={40} size={28}>
                  {blog.title}
                </Title>
              </Center>
              <Space h={20} />
              <Group justify="space-between">
                <Group>
                  <Text>投稿日：{formattedPublishedDate}</Text>
                  <Text>更新日：{formattedPublishedDate}</Text>
                </Group>
                <Text>カテゴリ： {blog.category?.name ?? "ないよ(笑)"}</Text>
              </Group>
              {/* <Divider mt={20} size="md" /> */}
              <Space h={20} />

              <Box className="blogContent">{parse(blog.content)}</Box>
              <TweetBlogButton title={blog.title} />
            </Box>
          </AppShell>
        </motion.div>
      </Box>
      <Footer />
    </Stack>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
