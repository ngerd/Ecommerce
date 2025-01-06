import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const public_Sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${public_Sans.variable} ${public_Sans.variable} antialiased`}>{children}</body> */}
      <body className={public_Sans.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
