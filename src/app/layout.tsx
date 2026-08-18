import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventoro.ro"),
  title: {
    template: "%s | VENTORO S.R.L.",
    default: "VENTORO S.R.L. – BE THE BEST | Consultanță IT & Echipamente Industriale",
  },
  description:
    "VENTORO S.R.L. - Soluții integrate de consultanță IT, echipamente industriale, energie, construcții, petrol și gaze, logistică și comerț internațional.",
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
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
