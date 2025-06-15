import { Righteous } from "next/font/google";
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
  Title,
  Divider,
  List,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

export function WorksPage() {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Stack align="stretch" justify="space-between" mih="100vh">
      <Box>
        <Header />{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <Box maw={800} m="0 auto" p="0 4%">
            <Stack align="center">
              <Image
                src="p0zKKXuf_400x400.jpg"
                h={180}
                w={180}
                radius={100}
                mt={60}
              />

              <Text mt={32} size="28px" fw={700} c="rgb(32, 16, 12)">
                ゆーとぴあ
              </Text>
              <Text mt={20} size="18px" c="rgba(32, 16, 12, 0.625)">
                制作物一覧
              </Text>
              <List
                mt={60}
                spacing="xs"
                size="xl"
                listStyleType="circle"
                c="rgba(32, 16, 12)"
                {...(!matches && { p: "0px 35px 0px 10px" })}
              >
                <List.Item>
                  <Anchor
                    href="https://credit-checker-biol.vercel.app/"
                    c="rgba(32, 16, 12)"
                    target="_blank"
                    underline="hover"
                  >
                    <Title order={2} {...(!matches && { size: "18px" })}>
                      生物学類21生向け卒業要件チェッカー
                    </Title>
                  </Anchor>
                  <Text>
                    筑波大学 生命環境学群 生物学類
                    2021年度入学生向けの卒業要件チェッカーです。twinsからダウンロードした成績表のcsvを読み込むことで，取得済み単位数が表示され，卒業に必要な科目項目を把握することができます。
                  </Text>
                </List.Item>
                {/* <List.Item>
                  <Anchor
                    href="https://r18-rate.utopi-a.dev/"
                    c="rgba(32, 16, 12)"
                    target="_blank"
                    underline="hover"
                  >
                    <Title order={2} {...(!matches && { size: "18px" })}>
                      pixiv R-18率チェッカー
                    </Title>
                  </Anchor>
                  <Text>
                    pixivの投稿イラストにおけるR-18指定率をチェックするためのWebアプリケーションです。「,」区切りのキーワードを入れることで，キーワードごとのR-18率を表示します。
                    <br />
                    また，Excelへの出力も可能です。
                  </Text>
                </List.Item> */}
              </List>
            </Stack>
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </Stack>
  );
}
