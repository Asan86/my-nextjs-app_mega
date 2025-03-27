import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ResponsivNav from "@/components/Home/Navbar/ResponsivNav";
import Providers from "./providers";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// const inter = Inter({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <body className={`${montserrat.className} antialiased`}>
          <ResponsivNav />
          {children}
        </body>
      </html>
    </Providers>
  );
}
