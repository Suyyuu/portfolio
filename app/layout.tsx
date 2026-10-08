import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suyash Kharade | Software Engineer / Product & Growth",
  description:
    "Portfolio of Suyash Kharade, Software Development Engineer building production web, backend, and mobile systems across React, Gatsby, Next.js, Python/Django, and Flutter.",
  keywords: [
    "Suyash Kharade",
    "Software Engineer",
    "Full-Stack Engineer",
    "Meragi Events",
    "Product Engineering",
    "Django",
    "React",
    "Next.js",
    "Flutter",
    "Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
