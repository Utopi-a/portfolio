import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
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
} from "@mantine/core";

export function HomePage() {
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
            バイオインフォマティクス勉強中
          </Text>
          <Group gap={50} mt={80}>
            <Anchor href="https://twitter.com/ITF_biol21" target="_blank">
              <Image src="XIcon.png" h={36} w={36} />
            </Anchor>
            <Anchor href="https://github.com/Utopi-a" target="_blank">
              <Image src="mark-github.svg" h={36} w={36} />
            </Anchor>
          </Group>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}