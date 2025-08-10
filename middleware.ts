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

  console.log("pathname pre missing", pathname, "Locales:", i18n.locales);
  
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

    // Estrategia mejorada para obtener el locale correcto
    let locale: string = i18n.defaultLocale; // Usar default como fallback
    
    // 1. Verificar si hay un parámetro lang en la URL (para casos específicos)
    const searchParams = request.nextUrl.searchParams;
    const langParam = searchParams.get('lang');
    if (langParam && i18n.locales.includes(langParam as any)) {
      locale = langParam;
      console.log("Locale desde URL param:", locale);
    } else {
      // 2. Intentar obtener desde la cookie (más confiable en Vercel)
      const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
      if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
        locale = cookieLocale;
        console.log("Locale desde cookie:", locale);
      } else {
        // 3. Fallback a la detección por navegador solo si no hay cookie
        const detectedLocale = getLocale(request);
        if (detectedLocale) {
          locale = detectedLocale;
          console.log("Locale detectado:", locale);
        }
      }
      
      // 4. Como último recurso, intentar el referer (pero no confiar solo en él)
      const referer = request.headers.get("referer");
      if (referer && !cookieLocale && !langParam) {
        try {
          const refererUrl = new URL(referer);
          const refererPathname = refererUrl.pathname;
          
          if (refererPathname.startsWith("/es/") || refererPathname === "/es") {
            locale = "es";
            console.log("Locale desde referer: es");
          } else if (refererPathname.startsWith("/en/") || refererPathname === "/en") {
            locale = "en";
            console.log("Locale desde referer: en");
          }
        } catch (error) {
          console.log("Error parsing referer:", error);
        }
      }
    }

    console.log("Final locale:", locale);

    const response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );

    // Establecer cookie para recordar la preferencia del idioma
    response.cookies.set("NEXT_LOCALE", locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
      sameSite: "lax", // Importante para Vercel
      secure: process.env.NODE_ENV === "production", // HTTPS en producción
    });

    return response;
  }

  // Si la URL ya tiene un locale, establecer la cookie para recordar la preferencia
  const currentLocale = pathname.split('/')[1];
  if (i18n.locales.includes(currentLocale as any)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
      sameSite: "lax", // Importante para Vercel
      secure: process.env.NODE_ENV === "production", // HTTPS en producción
    });
    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
