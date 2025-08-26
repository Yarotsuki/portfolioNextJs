import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description:
    "",
};

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
