import "../styles/globals.css";
import "../styles/navbar-globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../components/ModalContext";
import { initWebVitals } from "../utils/webVitals";

import React, { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className =
      pageProps.overflow !== "hidden" ? "overflow" : "overflow-hidden";
    
    // Initialize web vitals tracking
    initWebVitals();
  }, [pageProps.overflow]);
  
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

// Export web vitals for Next.js integration
export { reportWebVitals } from "../utils/webVitals";
