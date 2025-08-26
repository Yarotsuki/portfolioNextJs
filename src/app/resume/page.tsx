import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      
      <Heading className="font-black">Mes experiences</Heading>
      <Paragraph className="max-w-xl mt-4">
        Etudiant en Developpement Web j&apos;adore {" "}
        apprendre de nouvelle technologies et les mettre en pratique.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
