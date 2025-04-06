import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Providers from "./providers";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--montserrat",
});

// const inter = Inter({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Travel For You",
  description: "Travel Landing Page using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${montserrat.className} antialiased`}>
          <ResponsiveNav />
          {children}
        </body>
      </html>
    </Providers>
  );
}
