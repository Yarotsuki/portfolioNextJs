import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description:
    "Contactez Victorien Corbel pour des projets web, collaborations ou questions techniques.",
  pathname: "/contact",
});

export default function Projects() {
  return (
    <Container>
    
      <Heading className="font-black mb-2">Contactez moi</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Vous avez un projet, une question, ou simplement envie de discuter ?
        N&apos;hésitez pas à me contacter, je serai ravi de vous répondre.
      </Paragraph>
      <Contact />
    </Container>
  );
}
