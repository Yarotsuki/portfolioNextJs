import bollee from "../../public/images/project/Bollée.png";
import bqt from "../../public/images/project/BQT.png";


export const products = [
  {
    href: "https://cordonneriebollee.fr/",
    title: "Cordonnier Bollée",
    description:
      "Site internet pour une cordonnerie à Le Mans. Le site est conçu pour être simple et facile à utiliser.",
    thumbnail: bollee,
    images: [bollee],
    stack: ["NuxtJs", "Tailwindcss"],
    slug: "bollee",
    content: (
      <div>
        <h2>Caractéristiques du site</h2>
    <ul>
        <li><strong>Design responsive :</strong> Une mise en page adaptative garantissant une expérience fluide sur tous types d’écrans (ordinateurs, tablettes, smartphones).</li>
        <li><strong>Navigation claire :</strong> Une structure optimisée pour une exploration intuitive et rapide des différentes sections du site.</li>
        <li><strong>Optimisation SEO :</strong> Travail sur le référencement naturel afin d&apos;améliorer la visibilité sur les moteurs de recherche.</li>
        <li><strong>Formulaire de contact :</strong> Intégration d&apos;un moyen simple et efficace pour les visiteurs souhaitant obtenir des renseignements.</li>
        <li><strong>Accessibilité et performance :</strong> Un site léger et rapide, assurant une bonne expérience utilisateur.</li>
    </ul>

    <h2>Approche technique</h2>
    <p>Ce projet a été réalisé en utilisant des technologies modernes, garantissant un site fiable, sécurisé et facilement administrable. L’accent a été mis sur la simplicité d’utilisation, tant pour l’utilisateur final que pour l’éventuelle gestion du contenu.</p>
      </div>
    ),
  },
  {
    
    title: "BQT Couverture",
    description:
      "Site internet pour une entreprise de couverture a Mortagne au Perche.",
    thumbnail: bqt,
    images: [bqt],
    stack: ["NuxtJs", "Tailwindcss"],
    slug: "bqt-couverture",
    content: (
      <div>
        <h2>Caractéristiques du site</h2>
    <ul>
        <li><strong>Design responsive :</strong> Une mise en page adaptative garantissant une expérience fluide sur tous types d’écrans (ordinateurs, tablettes, smartphones).</li>
        <li><strong>Navigation claire :</strong> Une structure optimisée pour une exploration intuitive et rapide des différentes sections du site.</li>
        <li><strong>Optimisation SEO :</strong> Travail sur le référencement naturel afin d&apos;améliorer la visibilité sur les moteurs de recherche.</li>
        <li><strong>Formulaire de contact :</strong> Intégration d&apos;un moyen simple et efficace pour les visiteurs souhaitant obtenir des renseignements.</li>
        <li><strong>Accessibilité et performance :</strong> Un site léger et rapide, assurant une bonne expérience utilisateur.</li>
    </ul>

    <h2>Approche technique</h2>
    <p>Ce projet a été réalisé en utilisant des technologies modernes, garantissant un site fiable, sécurisé et facilement administrable. L’accent a été mis sur la simplicité d’utilisation, tant pour l’utilisateur final que pour l’éventuelle gestion du contenu.</p>
      </div>
    ),
  },
  // Ajoutez d'autres produits ici avec des slugs uniques
];
