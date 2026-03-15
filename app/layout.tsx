import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SwiftRail – Train Booking",
  description: "Fast, simple train ticket booking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 pb-12 pt-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

