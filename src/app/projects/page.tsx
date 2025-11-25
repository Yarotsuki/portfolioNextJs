import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Projets",
  description:
    "Exemples de projets réalisés par Victorien — applications web, démonstrations techniques et travaux personnels.",
  pathname: "/projects",
});

export default function Projects() {
  return (
    <Container>
      
      <Heading className="font-black mb-10">
        {" "}
        Mes Travaux
      </Heading>

      <Products />
    </Container>
  );
}
