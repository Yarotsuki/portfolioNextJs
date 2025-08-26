export interface Service {
  id: number
  title: string
  description: string
  price: string
  features: string[]
  icon: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 1,
    title: "Site Web Vitrine",
    description: "Création d'un site web professionnel pour présenter votre entreprise et attirer de nouveaux clients.",
    price: "À partir de 300€",
    features: [
      "Design responsive",
      "Optimisation SEO",
      "Formulaire de contact",
      "Formation à la gestion",
    ],
    icon: "🌐",
    popular: true,
  },
  //{
  //  id: 2,
  //  title: "Application Web",
  //  description:
  //    "Développement d'applications web sur mesure avec React/Next.js pour répondre à vos besoins spécifiques.",
  //  price: "À partir de 1500€",
  //  features: [
  //    "Interface utilisateur moderne",
   //   "Base de données intégrée",
  //   "Authentification sécurisée",
  //    "API personnalisée",
   //   "Maintenance 3 mois",
   // ],
   // icon: "⚡",
  //},
 // {
  //  id: 3,
  //  title: "E-commerce",
  //  description: "Boutique en ligne complète avec gestion des produits, commandes et paiements sécurisés.",
  //  price: "À partir de 1200€",
  //  features: [
   //   "Catalogue produits",
   //   "Panier et commandes",
   //   "Paiement sécurisé",
   //   "Gestion des stocks",
   //   "Tableau de bord admin",
   // ],
   // icon: "🛒",
 // },
  
]
