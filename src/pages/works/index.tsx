import Image from "next/image";

import { Inter } from "next/font/google";
import { Box } from "@mantine/core";
import { WorksPage } from "@/features/HomePage/works/WorksPage";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return <WorksPage />;
}
