import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geist.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}
