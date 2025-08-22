import { Container } from "@/components/Container"
import { Services } from "@/components/Services"
import { Heading } from "@/components/Heading"
import { Paragraph } from "@/components/Paragraph"

export default function ServicesPage() {
  return (
    <Container>
      <div className="mb-12">
        <Heading className="font-black mb-6">Mes Services de Développement Web</Heading>
        <Paragraph className="max-w-3xl text-lg mb-4">
          En tant que développeur web spécialisé, je vous accompagne dans la création de solutions numériques modernes
          et performantes. De la simple vitrine au projet complexe, chaque réalisation est pensée pour répondre à vos
          objectifs business.
        </Paragraph>
        <Paragraph className="max-w-3xl">
          Découvrez mes offres de services ci-dessous, conçues pour s'adapter à tous types de projets et budgets. Chaque
          prestation inclut un suivi personnalisé et une approche centrée sur vos besoins.
        </Paragraph>
      </div>

      <Services />
    </Container>
  )
}


