"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
 // const images = [
   
  //];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
      {/*  {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))} */}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
  <Paragraph className="mt-4">
    Salut, moi c&apos;est Victorien Corbel - développeur web passionné, étudiant en deuxième année de BTS SIO option SLAM, et créateur d&apos;expériences interactives. Bienvenue sur mon portfolio !
  </Paragraph>

  <Paragraph className="mt-4">
    Depuis mes débuts en développement, j&apos;ai toujours été fasciné par la fusion entre code et design. Spécialisé en VueJs, Tailwind CSS et PHP, je conçois des applications web modernes, performantes et intuitives. Mon objectif ? Transformer des idées en interfaces élégantes et dynamiques.
    Je suis également en apprentissage de React et NextJs pour élargir mes compétences et explorer de nouvelles possibilités.
  </Paragraph>

  <Paragraph className="mt-4">
    Au-delà du code, je m&apos;intéresse aussi à l&apos;optimisation des workflows et à l&apos;intégration d&apos;APIs comme TMDB ou nodemailer pour enrichir les expériences utilisateurs. J&apos;utilise des outils comme Prisma pour améliorer la gestion des données et des médias.
  </Paragraph>

  <Paragraph className="mt-4">
    Pour moi, un bon projet ne se limite pas à son bon fonctionnement : il doit aussi être esthétique et agréable à utiliser. J&apos;accorde une attention particulière aux détails, à la performance et à l&apos;accessibilité pour garantir une expérience utilisateur optimale.
  </Paragraph>

  <Paragraph className="mt-4">
    À travers ce site, je partage mes réalisations, mes expériences et mes réflexions sur le développement web. Que tu sois développeur en quête d&apos;inspiration, designer passionné ou simplement curieux, j&apos;espère que tu trouveras ici de quoi éveiller ton intérêt.
  </Paragraph>

  <Paragraph className="mt-4">
    Prêt à explorer ensemble les infinies possibilités du web ? N&apos;hésite pas à me contacter, et construisons quelque chose de génial !
  </Paragraph>

  <Paragraph className="mt-4">
    Merci d&apos;être là, et à très bientôt !
  </Paragraph>
</div>

    </div>
  );
}
