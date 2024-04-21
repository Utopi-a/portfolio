import { useMediaQuery } from "@mantine/hooks";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
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
  List,
  Space,
  Title,
  SimpleGrid,
} from "@mantine/core";
import { client } from "libs/client";
import Link from "next/link";
import { ArticleCard } from "./_components/ArticleCard";

export function BlogIndexPage({ blogs }: { blogs: any }) {
  const matches = useMediaQuery("(min-width: 768px)");
  //   console.log(blogs);
  return (
    <Stack align="stretch" justify="space-between" mih="100vh">
      <Box>
        <Header />
        <Space h={40} />
        <Box maw={800} m="0 auto">
          <Stack align="center">
            <Box>
              <Stack maw={400} p={"0 4%"}>
                {blogs.map((blog: any) => (
                  <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <ArticleCard blog={blog} />
                  </Link>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
}

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });
//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
