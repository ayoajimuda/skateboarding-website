import { Inter, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Skateboarding",
  description: "A skateboarding site",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased font-sans ${inter.variable} ${barlow.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}