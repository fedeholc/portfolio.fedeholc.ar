//vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
//styles
import "@app/globals.css";
import "./styles/themes-colors.css";
//fonts
import { Roboto_Mono, Recursive, Montserrat } from "next/font/google";
//components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { i18n, type Locale } from "@app/i18n-config";

import og from "@public/opengraph-image.jpeg";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const recursive = Recursive({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Federico Holc - Portfolio web",
  description: "Federico Holc - Portfolio web",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Federico Holc",
    description: "Portfolio web",
    url: "portfolio.fedeholc.ar",
    siteName: "Federico Holc",
    images: [
      {
        url: og.src,
        width: 630,
        height: 630,
        alt: "Federico Holc - Portfolio web",
      },
    ],

    type: "website",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={`${montserrat.variable} ${recursive.variable}  ${robotoMono.variable}  `}
    >
      <body className="background">
        <main className="layout__grid">
          <NavBar lang={params.lang}></NavBar>
          <article className="main_article">{children}</article>
          <Footer></Footer>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
