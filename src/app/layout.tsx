'use client'
import Navbar from "@/components/Navbar";
import "./globals.css";
import { useEffect, useState } from "react";
import AnimatedLoading from "@/components/Loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);
  
  return (
    <html lang="en">
      <body>
      <AnimatedLoading/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
