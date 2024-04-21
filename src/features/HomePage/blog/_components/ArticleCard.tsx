import { Card, Image, Text, Badge, Button, Group, Title } from "@mantine/core";

export function ArticleCard({ blog }: { blog: any }) {
  const publishedDate = new Date(blog.publishedAt);
  const updatedDate = new Date(blog.updatedAt);
  const formattedPublishedDate = `${publishedDate.getFullYear()}/${publishedDate.getMonth() + 1}/${publishedDate.getDate()}`;
  const formattedUpdatedDate = `${updatedDate.getFullYear()}/${updatedDate.getMonth() + 1}/${updatedDate.getDate()}`;
  return (
    <>
      <Card
        shadow="xs"
        padding="md"
        radius="md"
        style={{ width: "100%" }}
        c="rgb(32, 16, 12)"
      >
        <Card.Section>
          <Image
            src={blog?.eyecatch ? blog.eyecatch.url : "opengraph-image.jpg"}
            alt={blog.title}
            h={200}
          />
        </Card.Section>

        <Title order={2} size={18} mt={12}>
          {blog.title}
        </Title>
        <Group justify="space-between">
          <Text size="12px">{formattedPublishedDate}</Text>
          <Text size="12px">カテゴリ：{blog.category ?? "ないよ(笑)"}</Text>
        </Group>
      </Card>
    </>
  );
}
