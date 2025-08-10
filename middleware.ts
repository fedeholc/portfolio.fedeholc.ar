import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./app/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  console.log("GET locale", locale, "languages", languages, "locales", locales, "defaultLocale", i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {


  const pathname = request.nextUrl.pathname;

  console.log("pathname pre missing", pathname, "headers", request.headers.get("next-url"), "Locales:", i18n.locales);
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {

    // esto es porque por algun motivo cuando va a un link de un archivo en public con el redirect que está debajo no funciona
    //de esta forma si es un pdf va directo y anda
    if (pathname.slice(-3) === "pdf" || pathname.slice(-4) === "docx" || pathname.slice(-4) === "jpeg") {
      return NextResponse.next();

    }


    let locale = getLocale(request); // no borrar porque si viene vacio tiene que poner uno por default
    console.log("pathname", pathname, "locale pre headers", locale, "headers", request.headers.get("next-url"));
    //lo siguiente es porque el getLocale tomaba el idioma del navegador y no el idioma del sitio, es decir, si se cambió a ingles y el navegador está en español, al redireccionar mandaba a español, de esta forma se fija que idioma tiene y lo mantiene.
    if (request.headers.get("next-url")?.slice(0, 3) === "/es") {
      locale = "es";
    } else if (request.headers.get("next-url")?.slice(0, 3) === "/en") {
      locale = "en";
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }

  console.log ("redirijo a: ", pathname, "rurl", request.url);
  return NextResponse.redirect(
    new URL(
      `${pathname}`,
      request.url,
    ),
  );


}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
