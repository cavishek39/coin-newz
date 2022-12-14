import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import Footer from "../components/footer";
import { AuthContextProvider } from "../context/AuthContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // Create a client
  const queryClient = new QueryClient();
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
      <ThemeProvider initialTheme={theme}>
        <AuthContextProvider>
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </QueryClientProvider>
          </SessionProvider>
        </AuthContextProvider>
      </ThemeProvider>
    );
  }
};

export default trpc.withTRPC(MyApp);
