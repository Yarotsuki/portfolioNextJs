import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Victorien Corbel",
  description:
    "Victorien Corbel est un développeur web. Il est passionné par le développement d'applications web.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">A propos de moi</Heading>
      <About />
    </Container>
  );
}
