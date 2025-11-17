import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://rohitmalakar.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rohit Malakar | Portfolio",
  description:
    "Rohit Malakar is a developer building web apps that are quick, clear, and easy to use with React/Next.js, Node.js, Express, and MongoDB.",
  openGraph: {
    title: "Rohit Malakar | Portfolio",
    description:
      "Rohit Malakar is a developer building web apps that are quick, clear, and easy to use with React/Next.js, Node.js, Express, and MongoDB.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Malakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@therohitmalakar",
    title: "Rohit Malakar | Portfolio",
    description:
      "Rohit Malakar builds fast, clear, and user-friendly digital experiences.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rohit Malakar",
      url: SITE_URL,
      sameAs: ["https://github.com/therohitmalakar"],
      jobTitle: "Developer",
      knowsAbout: ["Next.js", "Node.js", "React", "MongoDB"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Rohit Malakar Portfolio",
      url: SITE_URL,
      description:
        "Rohit Malakar is a developer building web apps that are quick, clear, and easy to use with React/Next.js, Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-bg text-text antialiased`}>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <Sidebar />
          <div className="lg:pl-28 xl:pl-40 2xl:pl-52">
            <main id="main" className="px-4 pb-16 sm:px-6 lg:px-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
