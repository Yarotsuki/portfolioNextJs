import type { Metadata } from "next";

const SITE_NAME = "Victorien Corbel";
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

type GenerateOptions = {
  title?: string;
  description: string;
  image?: string;
  pathname?: string;
  keywords?: string[];
};

export function generateMetadata({
  title,
  description,
  image,
  pathname,
  keywords,
}: GenerateOptions): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = new URL(pathname || "/", DEFAULT_SITE_URL).toString();

  const images = image
    ? [new URL(image, DEFAULT_SITE_URL).toString()]
    : undefined;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    metadataBase: new URL(DEFAULT_SITE_URL),
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  return metadata;
}

export const SITE_URL = DEFAULT_SITE_URL;
