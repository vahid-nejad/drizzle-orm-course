import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.dummyblog.com"),

  title: {
    default: "dummy blog",
    template: `%s | dummy blog`,
  },
  description: "This is the description of dummy blog",
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
