import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trash App",
  description: "Trash App is the best way to judge your junk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:image" content="/assets/banner.png"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
