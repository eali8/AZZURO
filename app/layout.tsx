import type { Metadata } from "next";
import "./globals.css";
import { Italiana, Montserrat, Italianno } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  variable: "--font-italianno",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azzuro",
  description: "Azzuro Italian Restaurent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
  `}
        </Script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${italiana.variable} ${montserrat.variable} ${italianno.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
