import Image from "next/image";

import { Inter } from "next/font/google";
import { HomePage } from "../features/HomePage/HomePage";
import { Box } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}
