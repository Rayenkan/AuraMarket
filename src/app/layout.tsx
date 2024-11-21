// Import necessary modules and styles
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css"; // Only import once
import { Suspense } from "react";
// Configure Google Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap", // Optional: Same purpose as above
});

// Metadata configuration for your site
export const metadata: Metadata = {
  title: "AuraMarket",
  description: "AuraMarket E-commerce website",
};

// Root Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <NextTopLoader />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
