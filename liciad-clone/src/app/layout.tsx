import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIČI AD - Reklamu berieme osobne | Fullservisová reklamná agentúra",
  description:
    "Fullservisová reklamná agentúra s viac ako 10-ročnými skúsenosťami. Kreatívna stratégia, corporate identity, digital, web design, foto a video produkcia.",
  icons: {
    icon: [
      { url: "/sites/liciad/2024/04/cropped-favicon_gradient2-32x32.png", sizes: "32x32" },
      { url: "/sites/liciad/2024/04/cropped-favicon_gradient2-192x192.png", sizes: "192x192" },
    ],
    apple: "/sites/liciad/2024/04/cropped-favicon_gradient2-180x180.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
