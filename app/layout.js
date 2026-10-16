import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Khilare & Associates | Civil Engineers • Builders • Developers",
  description:
    "Khilare & Associates — Civil Engineering, Construction and Real Estate Development.",
  icons: {
    icon: "/images/logo-khilare.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className={inter.className}>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Page Content */}
        <main className="site-content">{children}</main>

        {/* Floating WhatsApp Button on all pages */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
