import Image from "next/image";
import styles from "./page.module.css";
import one from "../app/OG_first.avif"


export const Metadata = {
  title: "Products | My Shop", // Title Tag
  description: "Browse our latest products including electronics, fashion, and more.", // Meta Description
  viewport: "width=device-width, initial-scale=1", // Viewport
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://myshop.com/products",
  },
  openGraph: {
    title: "Products - My Shop",
    description: "Browse the latest products at My Shop",
    url: "https://myshop.com/products",
    siteName: "My Shop",
    images: [
      {
        url: one,
        width: 1200,
        height: 630,
        alt: "My Shop Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "content-type": "text/html; charset=UTF-8", // Content Type
    "hreflang": "en", // Hreflang (basic example)
  },
};
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>love</h1>
    </div>
  );
}
