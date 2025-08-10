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

  console.log("request href", request.nextUrl.href, "pathnameIsMissingLocale", pathnameIsMissingLocale);
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {

    // esto es porque por algun motivo cuando va a un link de un archivo en public con el redirect que está debajo no funciona
    //de esta forma si es un pdf va directo y anda
    if (pathname.slice(-3) === "pdf" || pathname.slice(-4) === "docx" || pathname.slice(-4) === "jpeg") {
      return NextResponse.next();

    }


    let locale = getLocale(request); // no borrar porque si viene vacio tiene que poner uno por default
    console.log("pathname", pathname, "locale pre headers", locale, "referer", request.headers.get("referer"));

    // Mejorada la lógica para mantener el idioma actual basándose en el referer
    const referer = request.headers.get("referer");
    if (referer) {
      const refererUrl = new URL(referer);
      const refererPathname = refererUrl.pathname;

      // Extraer el locale del referer si existe
      if (refererPathname.startsWith("/es/") || refererPathname === "/es") {
        locale = "es";
      } else if (refererPathname.startsWith("/en/") || refererPathname === "/en") {
        locale = "en";
      }
    }

    // Fallback: intentar obtener el idioma desde cookies si el referer no está disponible
    if (!referer) {
      const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
      if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
        locale = cookieLocale;
      }
    }

    const response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );

    // Establecer cookie para recordar la preferencia del idioma
    if (locale) {
      response.cookies.set("NEXT_LOCALE", locale, {
        maxAge: 60 * 60 * 24 * 365, // 1 año
        path: "/",
      });
    }

    return response;
  }

  // Si la URL ya tiene un locale, establecer la cookie para recordar la preferencia
  if (!pathnameIsMissingLocale) {
    const currentLocale = pathname.split('/')[1];
    if (i18n.locales.includes(currentLocale as any)) {
      const response = NextResponse.next();
      response.cookies.set("NEXT_LOCALE", currentLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 año
        path: "/",
      });
      return response;
    }
  }




}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
