import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "KeepPDF | Online PDF Birleştirme - Ücretsiz ve Güvenli",
    template: "%s | KeepPDF"
  },
  description: "Hızlı, güvenli ve ücretsiz online PDF birleştirme aracı. Dosyalarınız tarayıcınızda işlenir, sunucuya yüklenmez. Windows, Mac ve Mobil uyumlu.",
  keywords: ["PDF birleştirme", "online pdf", "ücretsiz pdf", "pdf merge", "güvenli pdf", "pdf birleştirici", "pdf düzenleme"],
  authors: [{ name: "KeepPDF Team" }],
  creator: "KeepPDF Team",
  publisher: "KeepPDF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KeepPDF | Online PDF Birleştirme - Ücretsiz ve Güvenli",
    description: "Hızlı, güvenli ve ücretsiz online PDF birleştirme aracı. Dosyalarınız tarayıcınızda işlenir, sunucuya yüklenmez.",
    url: "https://keeppdf.com",
    siteName: "KeepPDF",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://keeppdf.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "KeepPDF - Online PDF Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeepPDF | Online PDF Birleştirme - Ücretsiz ve Güvenli",
    description: "Hızlı, güvenli ve ücretsiz online PDF birleştirme aracı. Dosyalarınız tarayıcınızda işlenir.",
    creator: "@keeppdf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "KeepPDF",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Windows, macOS, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Hızlı, güvenli ve ücretsiz online PDF birleştirme aracı. Dosyalarınız tarayıcınızda işlenir.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
};

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
