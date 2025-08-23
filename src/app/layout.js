import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import NextWrapper from "@/components/wrapper/nextWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <NextWrapper>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextWrapper>
      </body>
    </html>
  );
}
