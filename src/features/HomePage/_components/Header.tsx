import App from "@/pages/_app";
import {
  AppShell,
  Title,
  Text,
  Anchor,
  Group,
  Box,
  Center,
} from "@mantine/core";
import Link from "next/link";

export function Header() {
  return (
    <Box
      h={80}
      maw={1500}
      m={"0px auto 20px auto"}
      pt={40}
      style={{ position: "sticky", top: 0, backdropFilter: "blur(20px)" }}
    >
      <Group justify="space-between" p={"10px 20px"}>
        <Link href="/">
          <Text c="rgba(32, 16, 12, 0.7)" size="24px">
            utopi-a.dev
          </Text>
        </Link>
        <Box>
          <Group gap="32px">
            <Anchor
              c="rgba(32, 16, 12, 0.7)"
              size="24px"
              href="https://mantine.dev/"
              target="_blank"
              underline="hover"
            >
              ABOUT
            </Anchor>
            <Anchor
              c="rgba(32, 16, 12, 0.7)"
              size="24px"
              href="https://mantine.dev/"
              target="_blank"
              underline="hover"
            >
              WORKS
            </Anchor>
            <Anchor
              c="rgba(32, 16, 12, 0.7)"
              size="24px"
              href="https://twitter.com/ITF_biol21"
              target="_blank"
              underline="hover"
            >
              CONTACT
            </Anchor>
          </Group>
        </Box>
      </Group>
    </Box>
  );
}
