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
  title: "Federico Holc",
  description: "Portfolio web de Federico Holc",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Federico Holc",
    description: "Portfolio web de Federico Holc",
    url: "portfolio.fedeholc.ar",
    siteName: "Federico Holc",
    images: [
      {
        url: "/public/opengraph-image.jpeg",
        width: 800,
        height: 600,
        alt: "My custom alt1",
      },
      {
        url: "/opengraph-image.jpeg",
        width: 1800,
        height: 1600,
        alt: "My custom alt2",
      },
    ],
    locale: "en_US",
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
