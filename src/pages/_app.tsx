import type { AppProps } from "next/app";

import "../styles/globals.css";

import { useHydration } from "../hooks/useHydration";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const hasHydrated = useHydration();

  return hasHydrated ? <Component {...pageProps} /> : <h1>Loading ...</h1>;
}

export default MyApp;
