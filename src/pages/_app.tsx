import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
