import { type Locale } from "@app/i18n-config";

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  return <div>{children}</div>;
}
