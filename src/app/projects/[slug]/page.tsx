import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";

// Définition correcte des types pour Next.js 13+
type Props = {
  params: {
    slug: string
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | John Doe",
      description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p>Produit non trouvé</p>;
  }
  
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
