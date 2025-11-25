import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = generateMetadata({
  title: "À propos",
  description:
    "Victorien Corbel, développeur web passionné par la création d'applications performantes et accessibles.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      
      <Heading className="font-black">A propos de moi</Heading>
      <About />
    </Container>
  );
}
