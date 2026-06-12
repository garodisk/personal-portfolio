import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://saket-garodia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saket Garodia | AI/ML Engineer",
    template: "%s | Saket Garodia"
  },
  description:
    "AI/ML Engineer and Senior Data Scientist building production ML, GenAI, RAG, optimization, and MLOps systems with measurable business impact.",
  keywords: [
    "Saket Garodia",
    "AI/ML Engineer",
    "Applied AI Engineer",
    "Senior Data Scientist",
    "GenAI Engineer",
    "MLOps",
    "RAG",
    "LangGraph",
    "Databricks",
    "Production ML"
  ],
  authors: [{ name: "Saket Garodia" }],
  creator: "Saket Garodia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Saket Garodia | AI/ML Engineer",
    description:
      "Production AI/ML builder focused on GenAI, RAG, MLOps, optimization, and full-stack AI products.",
    siteName: "Saket Garodia Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Professional headshot of Saket Garodia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saket Garodia | AI/ML Engineer",
    description:
      "Production AI/ML builder focused on GenAI, RAG, MLOps, optimization, and full-stack AI products.",
    images: ["/profile.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
