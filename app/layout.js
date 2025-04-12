import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Theme } from "@radix-ui/themes";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Rifqi Ammar Ramadhan - Home Page",
  description: "Rifqi Ammar Ramadhan personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} min-h-screen bg-white text-gray-800`}>
        <Theme>
          <Navbar />
          <main className="max-w-8xl mx-auto px-20 mt-28 mb-50">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
