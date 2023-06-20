import "./globals.css";
import { Archivo_Black, Roboto_Mono } from "next/font/google";
import { Recursive, Montserrat, Noto_Emoji } from "next/font/google";

export const notoEmoji = Noto_Emoji({
  weight: ["400"],
  subsets: ["emoji"],

  display: "swap",
  variable: "--font-noto-emoji",
});
export const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});
export const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const recursive = Recursive({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
});
export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Federico Holc",
  description: "Sitio web de Federico Holc",
  icons: {
    icon: "/fedeico.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${recursive.variable} ${archivoBlack.variable} ${robotoMono.variable} ${notoEmoji.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
