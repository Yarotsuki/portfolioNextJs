import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Accueil",
  description:
    "Portfolio de Victorien Corbel — développeur web spécialisé en création d'applications modernes avec Next.js et React.",
  pathname: "/",
});

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Bonjour je suis Victorien</Heading>
      <Paragraph className="max-w-xl mt-4">
      Bienvenue sur mon portfolio ! Je suis un passionné par le développement web{" "}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Titulaire d&apos;un BTS SIO option SLAM, je suis passionné par le développement web. J&apos;ai commencé à apprendre le développement web au debut de ma formationet j&apos;ai appris en autodidacte en parrallèle de ce celle ci.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Au cours de mon parcours j&apos;ai pu apprendre à utiliser des technologies comme <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Vue.js</Highlight>, <Highlight>Nuxt.js</Highlight>,<Highlight> MySQL</Highlight>,<Highlight>PHP</Highlight>,<Highlight>TailwindCSS</Highlight>, et beaucoup bien d&apos;autres. 
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Mes recents projets 💼
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
