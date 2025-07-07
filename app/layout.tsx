import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@components/Navbar/ResponsivNav";
import Providers from "./providers";
import Footer from "@components/Footer/Footer";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel For You",
  description: "Travel Landing Page using Next.js",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased">
        <Providers>
          <ResponsiveNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
