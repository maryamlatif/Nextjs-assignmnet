import React from "react";
import Header from "./components copy/Header";
import Footer from "./components copy/Footer";


import "./globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <Header />
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
