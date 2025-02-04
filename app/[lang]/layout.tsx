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
import { Canvas } from "./components/canvas";
import { i18n, type Locale } from "@app/i18n-config";
import icon from "@public/favicon.ico";
import og from "@public/opengraph-image.jpeg";
import { cookies } from "next/headers";

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
    icon: icon.src,
  },
  openGraph: {
    title: "Federico Holc",
    description: "Portfolio web",
    url: "portfolio.fedeholc.ar",
    siteName: "Federico Holc",
    images: [
      {
        url: og.src,
        width: 1200,
        height: 630,
        alt: "Federico Holc - Portfolio web",
      },
    ],

    type: "website",
  },
};

/* export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
 */
export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise <{ lang: Locale }>;
}) {
  const { lang } = await params;

  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;

  return (
    <html
      lang={lang}
      data-theme={themeCookie}
      className={`${montserrat.variable} ${recursive.variable}  ${robotoMono.variable}  `}
    >
      <body className="background">
        <Canvas></Canvas>
        <main className="layout__grid">
          <NavBar themeCookie={themeCookie || ""} lang={lang}></NavBar>
          <article className="main_article">{children}</article>
          <Footer></Footer>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
