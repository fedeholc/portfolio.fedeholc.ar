//styles
import "./globals.css";
import "./styles/themes-colors.css";
//fonts
import { Roboto_Mono, Recursive, Montserrat } from "next/font/google";
//components
import NavBar from "./components/navbar";
import Footer from "./components/footer";

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
      className={`${montserrat.variable} ${recursive.variable}  ${robotoMono.variable}  `}
    >
      <body className="background" >
        <main className="layout__grid">
          <NavBar></NavBar>
          <article className="main_article">{children}</article>
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
