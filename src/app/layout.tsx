import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AppProvider from "./provider";
import Footer from "./components/footer";
import Container from "./components/container";


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "HyrecruitAi",
  description: "Ai powered hiring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AppProvider>
          <Navbar/>
          {children}
          <Container>
          <Footer/>
          </Container>
        </AppProvider>
      </body>
    </html>
  );
}
