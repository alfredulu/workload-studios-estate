import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workload Studios Estate | Luxury Nigerian Real Estate",
  description:
    "Workload Studios Estate curates premium Nigerian properties with concierge service and sophisticated design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-stone text-deepSlate antialiased`}
      >
        <div className="min-h-screen bg-stone text-deepSlate">
          <Header />
          <main className="pt-[110px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
