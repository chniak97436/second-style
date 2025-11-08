import { Roboto } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const roboto = Roboto({
  variable: "roboto",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
