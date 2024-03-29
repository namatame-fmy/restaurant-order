import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import AuthProvider from "./components/AuthProvider";
import QueryProvider from "./components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resutrant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div className="">
              <Notification />
              <Navbar/>
              {children}
              <Footer />
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
