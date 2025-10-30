import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ITyCIBER - Ciberseguridad y Servicios Tecnológicos",
  description: "Empresa líder en ciberseguridad y servicios tecnológicos. Ofrecemos SOC 24/7, Pentesting, y migración a la nube para proteger tu negocio.",
  keywords: "ciberseguridad, SOC, pentesting, cloud migration, seguridad informática, servicios tecnológicos",
  openGraph: {
    title: "ITyCIBER - Ciberseguridad y Servicios Tecnológicos",
    description: "Protegemos tu empresa con soluciones de ciberseguridad avanzadas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}