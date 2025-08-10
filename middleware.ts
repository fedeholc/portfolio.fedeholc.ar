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

  console.log("🔍 MIDDLEWARE DEBUG - pathname:", pathname);
  console.log("🔍 MIDDLEWARE DEBUG - cookies:", request.cookies.getAll());
  console.log("🔍 MIDDLEWARE DEBUG - headers referer:", request.headers.get("referer"));

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  console.log("🔍 MIDDLEWARE DEBUG - pathnameIsMissingLocale:", pathnameIsMissingLocale);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {

    // esto es porque por algun motivo cuando va a un link de un archivo en public con el redirect que está debajo no funciona
    //de esta forma si es un pdf va directo y anda
    if (pathname.slice(-3) === "pdf" || pathname.slice(-4) === "docx" || pathname.slice(-4) === "jpeg") {
      return NextResponse.next();
    }

    // Estrategia mejorada para obtener el locale correcto
    let locale: string = i18n.defaultLocale; // Usar default como fallback

    // 1. PRIORIDAD MÁXIMA: Cookie del usuario (más confiable en Vercel)
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
      locale = cookieLocale;
      console.log("✅ Locale desde cookie (PRIORIDAD):", locale);
    } else {
      console.log("❌ No se encontró cookie válida, usando fallback");
      
      // 1.5. Verificar si hay un header personalizado desde el cliente (para casos donde la cookie falla)
      const clientLang = request.headers.get("x-client-lang");
      if (clientLang && i18n.locales.includes(clientLang as any)) {
        locale = clientLang;
        console.log("✅ Locale desde header cliente:", locale);
      } else {
        // 2. Verificar parámetros temporales del LangSwitcher
        const searchParams = request.nextUrl.searchParams;
        const tempLang = searchParams.get('temp_lang');
        const langParam = searchParams.get('lang');
        
        if (tempLang && i18n.locales.includes(tempLang as any)) {
          locale = tempLang;
          console.log("✅ Locale desde temp_lang (LangSwitcher):", locale);
        } else if (langParam && i18n.locales.includes(langParam as any)) {
          locale = langParam;
          console.log("✅ Locale desde URL param:", locale);
        } else {
          // 3. Fallback a la detección por navegador
          const detectedLocale = getLocale(request);
          if (detectedLocale) {
            locale = detectedLocale;
            console.log("✅ Locale detectado por navegador:", locale);
          }

          // 4. Como último recurso, intentar el referer
          const referer = request.headers.get("referer");
          if (referer) {
            try {
              const refererUrl = new URL(referer);
              const refererPathname = refererUrl.pathname;
              
              if (refererPathname.startsWith("/es/") || refererPathname === "/es") {
                locale = "es";
                console.log("✅ Locale desde referer: es");
              } else if (refererPathname.startsWith("/en/") || refererPathname === "/en") {
                locale = "en";
                console.log("✅ Locale desde referer: en");
              }
            } catch (error) {
              console.log("❌ Error parsing referer:", error);
            }
          }
        }
      }
    }

    console.log("🎯 Final locale seleccionado:", locale);
    
    // Construir la URL de destino
    const targetUrl = new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url,
    );
    
    // Preservar search params EXCEPTO temp_lang
    const searchParams = request.nextUrl.searchParams;
    for (const [key, value] of searchParams.entries()) {
      if (key !== 'temp_lang') {  // Omitir el parámetro temporal
        targetUrl.searchParams.set(key, value);
      }
    }
    
    console.log("📍 Redirigiendo a:", targetUrl.toString());

    const response = NextResponse.redirect(targetUrl);

    // Establecer cookie con configuración reforzada para Vercel
    response.cookies.set("NEXT_LOCALE", locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false, // Importante: permitir acceso desde JavaScript
    });
    
    console.log("🍪 Cookie establecida:", `NEXT_LOCALE=${locale}`);

    return response;
  }

  // Si la URL ya tiene un locale, verificar que sea el correcto según las preferencias del usuario
  const currentLocale = pathname.split('/')[1];
  if (i18n.locales.includes(currentLocale as any)) {
    
    // Verificar si el usuario tiene una preferencia diferente guardada
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    
    // Si hay una cookie con un idioma diferente al de la URL, redirigir
    if (cookieLocale && 
        i18n.locales.includes(cookieLocale as any) && 
        cookieLocale !== currentLocale) {
      
      console.log(`Redirigiendo de ${currentLocale} a ${cookieLocale} según cookie`);
      
      // Construir la nueva URL con el idioma correcto
      const newPathname = pathname.replace(`/${currentLocale}`, `/${cookieLocale}`);
      const targetUrl = new URL(newPathname, request.url);
      
      // Preservar search params EXCEPTO temp_lang
      const searchParams = request.nextUrl.searchParams;
      for (const [key, value] of searchParams.entries()) {
        if (key !== 'temp_lang') {  // Omitir el parámetro temporal
          targetUrl.searchParams.set(key, value);
        }
      }
      
      const response = NextResponse.redirect(targetUrl);
      
      // Mantener la cookie actualizada con configuración reforzada
      response.cookies.set("NEXT_LOCALE", cookieLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 año
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: false, // Importante: permitir acceso desde JavaScript
      });
      
      return response;
    }
    
    // Si no hay conflicto, verificar si necesitamos limpiar parámetros temporales
    const searchParams = request.nextUrl.searchParams;
    const hasTempLang = searchParams.has('temp_lang');
    
    if (hasTempLang) {
      // Crear URL limpia sin temp_lang
      const cleanUrl = new URL(request.url);
      cleanUrl.searchParams.delete('temp_lang');
      
      console.log("🧹 Limpiando parámetro temporal de la URL");
      
      const response = NextResponse.redirect(cleanUrl);
      response.cookies.set("NEXT_LOCALE", currentLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 año
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: false, // Importante: permitir acceso desde JavaScript
      });
      
      return response;
    }
    
    // Si no hay temp_lang, continuar normalmente y actualizar la cookie
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false, // Importante: permitir acceso desde JavaScript
    });
    
    console.log("🍪 Cookie actualizada con locale actual:", currentLocale);
    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
