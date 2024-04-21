import App from "@/pages/_app";
import {
  AppShell,
  Title,
  Text,
  Anchor,
  Group,
  Box,
  Center,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export function Header() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {matches ? (
        <Box
          h={60}
          pt={10}
          style={{
            position: "sticky",
            top: 0,
            backdropFilter: "blur(20px)",
            zIndex: 1000000,
          }}
        >
          <Group
            justify="space-between"
            p={"10px 20px"}
            maw={1500}
            m={"0px auto 20px auto"}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                utopi-a.dev
              </Text>
            </Link>
            <Box>
              <Group gap="32px">
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    ABOUT
                  </Text>
                </Link>
                <Link href="/blog" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    BLOG
                  </Text>
                </Link>
                <Link href="/works" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    WORKS
                  </Text>
                </Link>
                <Anchor
                  c="rgba(32, 16, 12, 0.7)"
                  size="24px"
                  href="https://twitter.com/ITF_biol21"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  CONTACT
                </Anchor>
              </Group>
            </Box>
          </Group>
        </Box>
      ) : (
        <Box
          h={120}
          maw={1500}
          m={"0px auto 20px auto"}
          pt={40}
          style={{
            position: "sticky",
            top: 0,
            backdropFilter: "blur(20px)",
            zIndex: 1000000,
          }}
        >
          <Stack align="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                utopi-a.dev
              </Text>
            </Link>
            <Box>
              <Group gap="32px">
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    ABOUT
                  </Text>
                </Link>
                <Link href="/blog" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    BLOG
                  </Text>
                </Link>
                <Link href="/works" style={{ textDecoration: "none" }}>
                  <Text c="rgba(32, 16, 12, 0.7)" size="24px">
                    WORKS
                  </Text>
                </Link>

                {/* <Anchor
                  c="rgba(32, 16, 12, 0.7)"
                  size="24px"
                  href="https://twitter.com/ITF_biol21"
                  target="_blank"
                  underline="hover"
                >
                  CONTACT
                </Anchor> */}
              </Group>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
}
