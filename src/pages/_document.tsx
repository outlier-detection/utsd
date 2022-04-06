import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { Server, Sheet } from "styletron-engine-atomic";
import { DocumentInitialProps } from "next/dist/shared/lib/utils";
import { styletron } from "../helpers/styletron";

type ExtendedDocumentProps = DocumentInitialProps & { stylesheets: Sheet[] };

class MyDocument extends Document<ExtendedDocumentProps> {
  static override async getInitialProps(ctx: DocumentContext): Promise<ExtendedDocumentProps> {
    const page = await ctx.renderPage(
      App =>
        function AppWrapper(props) {
          return (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          );
        }
    );
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  override render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />

          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs["media"]}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
