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

export function AboutPage() {
  return (
    <>
      <Header />
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
            プロフィール
          </Text>
          <Title
            order={1}
            mt={60}
            c="rgb(32, 16, 12)"
            size={24}
            w={"100%"}
            ta={"center"}
            style={{ borderBottom: "2px solid rgba(32, 16, 12, 0.125)" }}
          >
            経歴
          </Title>
          <List
            spacing="xs"
            size="xl"
            listStyleType="circle"
            c="rgba(32, 16, 12)"
          >
            <List.Item>
              <Text size="20px">
                私立武蔵高等学校中学校（2015/04～2021/03）
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                筑波大学 生命環境学群生物学類（2021/04～）
              </Text>
            </List.Item>

            <List.Item>
              <Text size="20px">
                株式会社LifePrompt インターン（2024/02～）
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                筑波大学 医学医療系 バイオインフォマティクス研究室（2024/04～）
              </Text>
            </List.Item>
          </List>
          <Title
            order={1}
            mt={60}
            c="rgb(32, 16, 12)"
            size={24}
            w={"100%"}
            ta={"center"}
            style={{ borderBottom: "2px solid rgba(32, 16, 12, 0.125)" }}
          >
            資格等
          </Title>
          <List
            spacing="xs"
            size="xl"
            listStyleType="circle"
            c="rgba(32, 16, 12)"
          >
            <List.Item>
              <Text size="20px">応用情報技術者試験　合格</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">普通自動車免許第一種</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                バイオインフォマティクス技術者認定試験　合格
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">日商簿記検定試験　３級</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">ビジネス会計検定　３級</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">小型船舶操縦士　２級</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">アマチュア無線技士　４級</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">第一種銃猟免許</Text>
            </List.Item>
            <List.Item>
              <Text size="20px">全日本剣道連盟　剣道初段</Text>
            </List.Item>
          </List>
          <Title
            order={1}
            mt={60}
            c="rgb(32, 16, 12)"
            size={24}
            w={"100%"}
            ta={"center"}
            style={{ borderBottom: "2px solid rgba(32, 16, 12, 0.125)" }}
          >
            できること
          </Title>
          <List
            spacing="xs"
            size="xl"
            listStyleType="circle"
            c="rgba(32, 16, 12)"
          >
            <List.Item>
              <Title order={2} size={20}>
                TypeScript
              </Title>
              <Text size="20px">
                インターンで使用しています。
                <br /> 関連して以下の技術あたりに触れています。
              </Text>
              <List size="xl" listStyleType="disc" spacing={0}>
                <List.Item>Next.js</List.Item>
                <List.Item>React</List.Item>
                <List.Item>Mantine</List.Item>
                <List.Item>tRPC</List.Item>
                <List.Item>prisma</List.Item>
                <List.Item>supabase</List.Item>
                <List.Item>Azure Functions</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Title order={2} size={20}>
                Python
              </Title>
              <Text size="20px">
                研究室での開発に使用しています。競技プログラミングもPythonでやってます。
              </Text>
            </List.Item>
            <List.Item>
              <Title order={2} size={20}>
                Git
              </Title>
              <Text size="20px">普通のチーム開発で使う程度はできます。</Text>
            </List.Item>
            <List.Item>
              <Title order={2} size={20}>
                C++
              </Title>
              <Text size="20px">APG4bの2章まで触れた程度のレベルです。 </Text>
            </List.Item>
          </List>
          <Title
            order={1}
            mt={60}
            c="rgb(32, 16, 12)"
            size={24}
            w={"100%"}
            ta={"center"}
            style={{ borderBottom: "2px solid rgba(32, 16, 12, 0.125)" }}
          >
            すきなもの
          </Title>
          <List
            spacing="xs"
            size="xl"
            listStyleType="circle"
            c="rgba(32, 16, 12)"
          >
            <List.Item>
              <Text size="20px">
                生物学がわりと好きです。高校生の時には生物学オリンピックに出場後、現在も学生スタッフのSCIBO
                として参加しています。
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                2024年1月のABC337からAtCoderで競技プログラミングをやっています。まだ灰色ですが，少しずつでもレートを上げられるといいな，と思っています。
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                趣味としてクレー射撃を本格的に行っています。スキート射撃で国体出場を目指しています。
                <s>夢は大きくオリンピックですが……。</s>
              </Text>
            </List.Item>
            <List.Item>
              <Text size="20px">
                その他、車に乗ったりいじったりするのも好きです。
                <br />
                現在はスバルの2001年式 インプレッサWRX NB-R
                GDA-Bに乗っています。ハイオクで燃費が9
                km/Lなうえ、よく壊れるの維持費が厳しいです。
                カスタムは夢のまた夢です。
                クレー射撃もなかなかお財布に厳しいのでなおさらですね。
              </Text>
            </List.Item>
          </List>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
