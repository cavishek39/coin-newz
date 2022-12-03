import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { theme } = useContext(ThemeContext);
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return null;
  } else {
    return (
      <SessionProvider session={session}>
        <ThemeProvider initialTheme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    );
  }
};

export default trpc.withTRPC(MyApp);
