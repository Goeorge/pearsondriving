import type { Metadata } from "next";
import { inter } from '../utils/fonts'
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slick.css'; // Import slick.css here
import BootstrapClient from '@/components/BootstrapClient.js';



export const metadata: Metadata = {
  title: "Pearson Driving School",
  description: "No.1 Driving school in Nyeri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
