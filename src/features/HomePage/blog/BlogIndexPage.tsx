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
import Link from "next/link";
import { ArticleCard } from "./_components/ArticleCard";
import { motion } from "framer-motion";

export function BlogIndexPage({ blogs }: { blogs: any }) {
  const matches = useMediaQuery("(min-width: 768px)");
  //   console.log(blogs);
  return (
    <Stack align="stretch" justify="space-between" mih="100vh">
      <Box>
        <Header />
        <motion.div
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // マウント時
          exit={{ opacity: 0 }} // アンマウント時
          transition={{ duration: 0.75 }}
        >
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
          </Box>{" "}
        </motion.div>
      </Box>
      <Footer />
    </Stack>
  );
}
