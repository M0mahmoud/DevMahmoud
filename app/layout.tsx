import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const biaJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mahmoud Mohamed",
  description: "Hi, my name is Mahmoud. I am a graduate of the Faculty of Science, Computer Science department 2021 - 2024. I am from Egypt. I have rich experience in website development and building.",
  keywords: "M05, Mahmoud Mohamed, Website development, Web development, Computer Science, Faculty of Science, Egypt web developer, Graduate 2021-2024, Tailwind CSS, Next.js",
  icons: "/MYLOGO.svg",
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
    <html lang="en">
      <body suppressHydrationWarning className={`${biaJamjuree.className} bg-black text-white container`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
