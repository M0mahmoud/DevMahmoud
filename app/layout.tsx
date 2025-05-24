import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const biaJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "Mahmoud Mohamed | Front-End Developer (React.js | Next.js)",
  description:
    "I'm Mahmoud Mohamed, a Front-End Developer from Egypt with hands-on experience building modern web applications using React.js, Next.js, and Tailwind CSS. I specialize in developing responsive, high-performance UIs with a focus on clean code and best practices.",
  keywords:
    "M05, Mahmoud Mohamed, Front-End Developer, React Developer, Next.js Developer, Tailwind CSS, Web Developer Egypt, JavaScript, HTML5, CSS3, Mongoose, Clerk, Firebase, Node.js, Portfolio, devmahmoud.me, Threads Clone, Zoom Clone, E-Commerce App, Real-time Chat App",
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
      <body
        suppressHydrationWarning
        className={`${biaJamjuree.className} bg-black text-white container`}
      >
        <Nav />
        {children}
        <Footer />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
