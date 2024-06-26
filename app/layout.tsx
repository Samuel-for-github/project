import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import {NextUIProvider} from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project",
  description: "Generated by create next app",
};
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./component/Footer";
import { UserWrapper } from "./context/UserContextProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserWrapper>
      <body className={`${inter.className} flex flex-col items-center min-h-[100vh] mx-auto`}>
          <Header/>
          <div className="flex justify-center mx-auto mb-10">
          <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </div>
        <Footer/>
        </body>
      </UserWrapper>
     
    </html>
  );
}
