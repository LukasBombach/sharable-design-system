import "styles/tokens.css";
import "styles/defaults.css";
import "styles/layout.css";
import "styles/text.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
