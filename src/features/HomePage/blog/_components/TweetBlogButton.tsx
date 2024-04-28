import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Center,
  CopyButton,
  Divider,
  ActionIcon,
  Tooltip,
  rem,
  TextInput,
  Box,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";

export const TweetBlogButton = ({ title }: { title: string }) => {
  const router = useRouter();

  const handleTweetClick = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} | ゆーとぴあ`)}%0a&url=${encodeURIComponent(
      `https://utopi-a.dev${router.asPath}`
    )}`;
    window.open(tweetUrl, "_blank");
  };

  const copyButton = (
    <CopyButton
      value={`${`https://utopi-a.dev${router.asPath}`}`}
      timeout={2000}
    >
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );

  return (
    <>
      <Divider size="lg" />
      <Center>
        <Card bg="rgba(255,255,255, 0.25)" mt={60}>
          <Button
            onClick={handleTweetClick}
            w={300}
            color="rgba(0, 0, 0, 1)"
            size="lg"
            radius="xl"
          >
            <Box>
              <Group wrap="nowrap" gap={0}>
                <Text>Post on</Text>
                <Image
                  src="/XIcon.png"
                  alt="X logo"
                  w={20}
                  h={20}
                  ml={5}
                  style={{ filter: "invert()" }}
                />
              </Group>
            </Box>
          </Button>
          <Text style={{ textAlign: "center" }} mt={15}>
            or
          </Text>
          <TextInput
            mt={5}
            radius="md"
            value={`${`https://utopi-a.dev${router.asPath}`}`}
            readOnly
            rightSection={copyButton}
            variant="unstyled"
          />
        </Card>
      </Center>
    </>
  );
};
