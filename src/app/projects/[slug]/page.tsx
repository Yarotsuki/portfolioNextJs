import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { generateMetadata as generateSharedMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return generateSharedMetadata({
      title: product.title,
      description: product.description,
      image: (product.thumbnail as any)?.src || (product.images && (product.images as any)[0]?.src),
      pathname: `/projects/${product.slug}`,
      keywords: product.stack,
    });
  } else {
    return generateSharedMetadata({
      title: "Mes Projets | Portfolio",
      description: "Découvrez mes réalisations en développement web",
      pathname: "/projects",
    });
  }
}

export default async function SingleProjectPage({ params }: PageProps) {
  const { slug } = await params;
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
