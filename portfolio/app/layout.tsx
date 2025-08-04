import "./styles/globals.css";

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Leandro M. L. C. - Portfólio",
  description:
    "Crawler & Scraper Developer focused on automation, data and web scraping.",
  icons: {
    icon: [
      {
        url: "",
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20130%20100%22%3E%3Ctext%20x=%2210%22%20y=%2270%22%20font-family=%22Arial,%20sans-serif%22%20font-weight=%22bold%22%20font-size=%2270%22%20fill=%22white%22%3ELC%3C/text%3E%3Ccircle%20cx=%22110%22%20cy=%2260%22%20r=%228%22%20fill=%22%232d6bed%22/%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased bg-terminal min-h-screen p-4 md:p-8`}
      >
        {children}
      </body>
    </html>
  );
}
