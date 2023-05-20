import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/AppBar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dummyblog.com"),
  title: {
    default: "Dummy Blog",
    template: `%s | Dummy blog`,
  },
  description: "This is the description of dummy blog",
  verification: {
    google: "google-site-verification=878787878",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
