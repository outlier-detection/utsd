import type { AppProps } from "next/app";

import { Block, BlockProps } from "baseui/block";
import { BaseProvider, styled } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";

import useMediaQuery from "../hooks/useMediaQuery";
import { styletron } from "../helpers/styletron";

import { themes } from "../helpers/theme";
import * as React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { ROUTES, Route } from "../helpers/router";
import Container from "../components/container";
import { ParagraphXSmall } from "baseui/typography";
import StyleLink from "../components/styleLink";

const blockProps: BlockProps = {
  color: "contentPrimary",
  backgroundColor: "backgroundPrimary",
  maxWidth: "1680px",
  margin: "auto",
  minHeight: "calc(100vh - 135px)",
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

  const FooterParagraph = styled(ParagraphXSmall, ({ $theme }) => ({
    [$theme.mediaQuery.medium]: {
      textAlign: "right",
    },
  }));

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme}>
        <Navbar {...{ currentRoute }} />
        <Block {...blockProps}>
          <Component {...{ ...pageProps, isDarkTheme, setTheme }} />
        </Block>
        <Container>
          <hr />
          <FooterParagraph>
            Learn more about UTSD in{" "}
            <StyleLink href={"https://dl.acm.org/doi/abs/10.1007/978-3-031-12670-3_14"} text={"our paper"} />, or
            contribute to the project on{" "}
            <StyleLink href={"https://github.com/outlier-detection/utsd/"} text={"Github"} />.
          </FooterParagraph>
        </Container>
      </BaseProvider>
    </StyletronProvider>
  );
}
