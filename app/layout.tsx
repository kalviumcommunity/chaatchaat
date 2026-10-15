// ✅ PROVIDED — root layout with a header. Navigation uses next/link.
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChaatChaat",
  description: "A street-food explorer built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            🌶️ ChaatChaat
          </Link>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
