import type { Metadata } from "next";
import { Figtree, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nanumPen = Nanum_Pen_Script({
  variable: "--font-nanum-pen",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Úvod | LIČI AD - We take advertising personally",
  description:
    "Sme fullservisová reklamná agentúra, ktorá pomáha značkám rásť prostredníctvom inovatívnych stratégií.",
  icons: {
    icon: [
      { url: "/sites/liciad/2024/04/cropped-favicon_gradient2-32x32.png", sizes: "32x32" },
      { url: "/sites/liciad/2024/04/cropped-favicon_gradient2-192x192.png", sizes: "192x192" },
    ],
    apple: "/sites/liciad/2024/04/cropped-favicon_gradient2-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${figtree.variable} ${nanumPen.variable}`}>
      <body>{children}</body>
    </html>
  );
}
