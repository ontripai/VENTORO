import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffc000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ventoro.ro"),
  title: {
    template: "%s | VENTORO S.R.L. – BE THE BEST",
    default: "VENTORO S.R.L. – BE THE BEST | Consultanță IT & Echipamente Industriale",
  },
  description:
    "VENTORO S.R.L. - Lider în consultanță IT (CAEN 6220), furnizare echipamente industriale de înaltă performanță, energie, construcții, petrol & gaze, logistică și comerț internațional între România, Austria și piețele globale.",
  keywords: [
    "VENTORO",
    "VENTORO S.R.L.",
    "consultanta IT Romania",
    "IT consulting Bucharest",
    "echipamente industriale",
    "industria energetica Romania",
    "petrol si gaze",
    "constructii civile si industriale",
    "aparatura medicala",
    "comert international Romania Austria",
    "logistica transport naval aerian",
    "CAEN 6220",
    "CUI 46012496",
  ],
  authors: [{ name: "VENTORO S.R.L.", url: "https://ventoro.ro" }],
  creator: "VENTORO S.R.L.",
  publisher: "VENTORO S.R.L.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://ventoro.ro/ro",
    languages: {
      "ro-RO": "https://ventoro.ro/ro",
      "en-US": "https://ventoro.ro/en",
      "x-default": "https://ventoro.ro/ro",
    },
  },
  openGraph: {
    title: "VENTORO S.R.L. – BE THE BEST | Consultanță IT & Echipamente Industriale",
    description:
      "Soluții integrate de top în consultanță IT, inginerie tehnologică, echipamente industriale și comerț internațional România-Austria.",
    url: "https://ventoro.ro",
    siteName: "VENTORO S.R.L.",
    images: [
      {
        url: "https://ventoro.ro/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "VENTORO S.R.L. – BE THE BEST Official Logo & Branding",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VENTORO S.R.L. – BE THE BEST",
    description:
      "Lider în consultanță IT, echipamente industriale și comerț internațional România-Austria.",
    images: ["https://ventoro.ro/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.jpeg" },
      { url: "/images/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logo.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  manifest: "/manifest.json",
  category: "Business, Technology & Industrial Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#1a2230] text-gray-100 min-h-screen flex flex-col selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
