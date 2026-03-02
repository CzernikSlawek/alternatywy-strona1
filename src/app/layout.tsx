import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
const montserrat = Montserrat({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={montserrat.className}>
      <NextTopLoader color="#FF4D7E" />
      <DonationProvider>
        <AuthDialogProvider>
      <SessionProviderComp session={session}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            
            {children}
            
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </SessionProviderComp>
        </AuthDialogProvider>
        </DonationProvider>
        <Script
  src="https://cdn.userway.org/widget.js"
  data-account="FBKFSL0XvR"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}
