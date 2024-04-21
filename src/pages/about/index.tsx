import Image from "next/image";

import { Inter } from "next/font/google";
import { Box } from "@mantine/core";
import { AboutPage } from "@/features/HomePage/about/AboutPage";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return <AboutPage />;
}
