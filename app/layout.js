import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Rifqi Ammar Ramadhan",
  description: "Rifqi Ammar Ramadhan personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} min-h-screen bg-white text-gray-800`}>
        <Navbar />
        <main className="max-w-8xl mx-auto px-20 mt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
