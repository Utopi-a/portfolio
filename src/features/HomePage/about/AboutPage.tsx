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
} from "@mantine/core";

export function AboutPage() {
  return (
    <>
      <Header />
      <Box maw={800} m="0 auto">
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
          <Text mt={20} size="18px" c="rgba(32, 16, 12, 0.7)">
            プロフィール
          </Text>
          <Title order={1} mt={80} c="rgb(32, 16, 12)" size={24}>
            経歴
          </Title>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
