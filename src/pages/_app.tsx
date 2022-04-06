import type { AppProps } from "next/app";

import { Block, BlockProps } from "baseui/block";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";

import useMediaQuery from "../hooks/useMediaQuery";
import { styletron, styletronDebug } from "../helpers/styletron";

import { themes } from "../helpers/theme";
import * as React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { ROUTES, Route } from "../helpers/router";

const blockProps: BlockProps = {
  color: "contentPrimary",
  backgroundColor: "backgroundPrimary",
  maxWidth: "100vw",
  minHeight: "100vh",
  overflow: "hidden",
};

const getCurrentRoute = (routeHref: string): Route => {
  const route: Route | undefined = ROUTES.find(x => x.href === routeHref);
  return route ? route : { label: "Not found", href: "404" };
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(themes.lightTheme);
  const isDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const router = useRouter();
  const currentRoute = getCurrentRoute(router.pathname);

  return (
    // debug={styletronDebug} currently produces errors
    <StyletronProvider value={styletron} debugAfterHydration>
      <BaseProvider theme={theme}>
        <Navbar {...{ currentRoute }} />
        <Block {...blockProps}>
          <Component {...{ ...pageProps, isDarkTheme, setTheme }} />
        </Block>
      </BaseProvider>
    </StyletronProvider>
  );
}
