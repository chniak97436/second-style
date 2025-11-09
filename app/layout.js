import { Roboto } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full w-full">
      <body
        className={`${roboto.variable} w-[100%] h-[100%]`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
