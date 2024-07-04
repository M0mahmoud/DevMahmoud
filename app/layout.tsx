import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const biaJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mahmoud Mohamed",
  description: "FrontEnd Developer - M05",
  icons: "/logo.png",
  verification: {
    google: "yJjSOYb8whfF_s3VSwzoA5yIazKROQaFdDsiZE761B8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${biaJamjuree.className} bg-black text-white container`}>{children}</body>
    </html>
  );
}
