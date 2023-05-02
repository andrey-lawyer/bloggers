import Loader from "@/components/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useApp } from "@/hooks/useApp";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useApp();
  return (
    <RecoilRoot>
      {loading && <Loader />}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
