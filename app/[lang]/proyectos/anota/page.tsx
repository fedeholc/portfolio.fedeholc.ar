import ProyectoANOTA from "../ProyectoANOTA";
import { Locale } from "@app/i18n-config";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ProyectoANOTA lang={lang} />;
}
