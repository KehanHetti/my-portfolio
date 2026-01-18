import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geist.variable} font-sans antialiased`}>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5VM8E4DQ6Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5VM8E4DQ6Y');
        `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
