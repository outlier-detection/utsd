import * as React from "react";
import dynamic from "next/dynamic";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Block } from "baseui/block";
import { Button, SIZE } from "baseui/button";
import { ChevronLeft } from "baseui/icon";
import { useRouter } from "next/router";
import { ParagraphLarge, ParagraphSmall } from "baseui/typography";
import { Maybe, Nothing } from "purify-ts";
import * as R from "remeda";
import { z } from "zod";

import { Dataset, loadDataset } from "../../../../../helpers/json";
import { Navigation } from "baseui/side-navigation";
import { Skeleton } from "baseui/skeleton";
import Link from "next/link";
import { StyledLink } from "baseui/link";
import Container from "../../../../../components/container";

const PlotlyLine = dynamic(() => import("../../../../../components/line-plotly"), { ssr: false });
const toVariantId = (id: number) => `#variant-${id}`;
const fromVariantId = (id: string) => parseInt(id.split("-")[1]);
const VARIANTS = R.map(R.range(1, 11), id => ({ title: `Variant ${id}`, itemId: toVariantId(id) }));

const zQuery = z.object({
  id: z.string(),
  classes: z.number(),
  fraction: z.number(),
});
type Query = z.infer<typeof zQuery>;

const responsiveSideNavWidth = ["initial", "initial", "400px"];

export default function Tasks() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Maybe<Dataset>>(Nothing);
  const [query, setQuery] = React.useState<Maybe<Query>>(Nothing);
  const [variant, setVariant] = React.useState(1);
  const router = useRouter();

  React.useEffect(() => {
    const parsedQuery = Maybe.encase(() => {
      const { id, classes, fraction } = router.query;
      const preparedQuery = {
        id,
        classes: parseInt(classes as string),
        fraction: parseFloat(fraction as string),
      };
      return zQuery.parse(preparedQuery);
    });
    setQuery(parsedQuery);
  }, [router]);

  React.useEffect(() => {
    query.ifJust(q => {
      loadDataset(`${q.id}_${q.classes}_${q.fraction}_${variant}`)
        .run()
        .then(result => {
          setData(result);
          setLoading(false);
        });
    });
  }, [query, variant]);

  const ResponsiveGrid = ({ children }: any) => (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2]}
      flexGridColumnGap="scale300"
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      {children}
    </FlexGrid>
  );

  const SideNav = (
    <FlexGridItem maxWidth={responsiveSideNavWidth}>
      <Navigation
        items={VARIANTS}
        activeItemId={toVariantId(variant)}
        onChange={({ event, item }) => {
          event.preventDefault();
          setVariant(fromVariantId(item.itemId as string));
        }}
        overrides={{
          NavItemContainer: {
            style: ({ $theme }) => ({
              outline: `0.1px dashed ${$theme.colors.mono500}`,
              transition: "background .1s ease-in-out",
              ":hover": {
                backgroundColor: $theme.colors.mono300,
              },
            }),
          },
        }}
      />
      <ParagraphSmall color="gray">
        * If there are more than 100 normal data points, 100 random points are sampled for visualization. If there are
        more than 100 outliers, we sample an equal amount of normal points.
      </ParagraphSmall>
    </FlexGridItem>
  );

  const Content = (id: string, classes: number, fraction: number, dataset: Dataset) => (
    <React.Fragment>
      <ParagraphSmall style={{ textAlign: "center", padding: "7px 15px", border: "1px dashed" }}>
        <b>{id}</b> with {fraction * 100}% of outliers and {classes} normal {classes > 1 ? "classes" : "class"} *
      </ParagraphSmall>
      <Block maxWidth={responsiveSideNavWidth} display={"flex"} alignItems={"center"} justifyContent={["stretch"]}>
        <Button
          style={{ width: "100%", marginBottom: "16px" }}
          size={SIZE.compact}
          onClick={() => router.push({ pathname: "/", query: { classes, fraction } })}
          startEnhancer={ChevronLeft}
        >
          Back to list of tasks
        </Button>
      </Block>
      <ResponsiveGrid>
        {SideNav}
        <FlexGridItem marginTop={["0", "0", "-52px"]}>
          {/*<Line dataset={dataset}/>*/}
          <PlotlyLine dataset={dataset} />
        </FlexGridItem>
      </ResponsiveGrid>
    </React.Fragment>
  );

  const Loading = (
    <React.Fragment>
      <Block marginTop={"scale200"} marginBottom={"scale200"}>
        <Skeleton animation height="36px" />
      </Block>
      <ResponsiveGrid>
        <FlexGridItem maxWidth={responsiveSideNavWidth}>
          <Skeleton animation height="calc(100vh - 225px)" />
        </FlexGridItem>
        <FlexGridItem>
          <Skeleton animation height="calc(100vh - 225px)" />
        </FlexGridItem>
      </ResponsiveGrid>
    </React.Fragment>
  );

  const CustomLink = (props: { href: string; text: string }) => (
    <Link href={props.href} passHref>
      <StyledLink>{props.text}</StyledLink>
    </Link>
  );

  const Error = (
    <Container>
      <ParagraphLarge>
        Could not load task, please <CustomLink href="/" text="go back" /> and try again. If the problem persists,
        please{" "}
        <CustomLink href="https://github.com/outlier-detection/utsd/issues/new" text="raise an issue on Github" /> to
        describe your problem.
      </ParagraphLarge>
    </Container>
  );

  return (
    <React.Fragment>
      <Block maxWidth="1680px" margin="auto">
        {isLoading
          ? Loading
          : query.caseOf({
              Just: currentQuery =>
                data.caseOf({
                  Just: dataset => Content(currentQuery.id, currentQuery.classes, currentQuery.fraction, dataset),
                  Nothing: () => Error,
                }),
              Nothing: () => Error,
            })}
      </Block>
    </React.Fragment>
  );
}
