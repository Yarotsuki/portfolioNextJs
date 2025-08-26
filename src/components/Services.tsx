"use client"
import { Heading } from "./Heading"
import type { Service } from "@/constants/services"
import { services } from "@/constants/services"
import { Paragraph } from "./Paragraph"
import { motion } from "framer-motion"
import Link from "next/link"

export const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:gap-10">
      <div className="flex flex-col space-y-4">
        <Heading as="h2" className="font-black">
          Mes Services 
        </Heading>
        <Paragraph className="text-base max-w-xl">
          Je propose des solutions web sur mesure pour accompagner votre projet du concept à la mise en ligne.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service: Service, idx: number) => (
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="bg-neutral-100 p-6 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
                </div>
              )}

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-black ">{service.title}</h3>
                  <p className="text-blue-500 font-semibold text-lg">{service.price}</p>
                </div>
              </div>

              <Paragraph className="text-sm mb-6 flex-grow">{service.description}</Paragraph>

              <div className="space-y-2">
                <h4 className="font-semibold text-black  text-sm mb-3">Inclus dans cette offre :</h4>
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIdx: number) => (
                    <li key={featureIdx} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

             
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-neutral-50  p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <div className="text-center space-y-4">
          <Heading as="h3" className="text-black">
            Intéressé ?
          </Heading>
          <Paragraph className="text-base max-w-2xl mx-auto">
            Vous avez un projet spécifique en tête ? Contactez-moi pour discuter de vos besoins et obtenir un devis
            personnalisé adapté à votre budget.
          </Paragraph>
          <Link href={"/contact"} >
            <button className="bg-blue-500 mt-4 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Discutons de votre projet
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
