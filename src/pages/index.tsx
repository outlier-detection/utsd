import * as React from "react";
import { Block } from "baseui/block";
import dynamic from "next/dynamic";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Option, Select, SIZE } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Maybe } from "purify-ts";
import * as R from "remeda";

import { DatasetMeta, loadDatasetMeta } from "../helpers/json";
import { Skeleton } from "baseui/skeleton";

const Table = dynamic(() => import("../components/table"), { ssr: false });

interface OptionsT {
  id: number;
  label: string;
}

export const CLASS_OPTIONS: OptionsT[] = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
];

export const PERCENT_OPTIONS: OptionsT[] = [
  { id: 0.025, label: "2.5%" },
  { id: 0.05, label: "5.0%" },
  { id: 0.1, label: "10.0%" },
];

export default function Index() {
  const [loading, setLoading] = React.useState(true);
  const [classValue, setClassValue] = React.useState<readonly Option[]>([CLASS_OPTIONS[0]]);
  const [percentValue, setPercentValue] = React.useState<readonly Option[]>([PERCENT_OPTIONS[0]]);
  const [data, setData] = React.useState<DatasetMeta[]>([]);
  const { query } = useRouter();

  useEffect(() => {
    try {
      const { classes, fraction } = query; // might be undefined thus try
      const identify = (options: OptionsT[], value: string) =>
        Maybe.fromNullable(R.find(options, x => x.id.toString() === value));
      identify(CLASS_OPTIONS, classes as string).ifJust(value => setClassValue([value]));
      identify(PERCENT_OPTIONS, fraction as string).ifJust(value => setPercentValue([value]));
    } catch (err) {} // we simply do nothing if we cannot parse the query
  }, [query]);

  useEffect(() => {
    loadDatasetMeta()
      .run()
      .then(result => {
        setData(result.orDefault([]));
        setLoading(false);
      });
  }, []);

  return (
    <Block height="calc(100vh - 150px)">
      <FlexGrid flexGridColumnCount={[1, 1, 2]} marginLeft="auto">
        <FlexGridItem></FlexGridItem>
        <FlexGridItem>
          <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale100">
            <FlexGridItem>
              <FormControl label={"Number of normal classes"}>
                <Select
                  size={SIZE.compact}
                  options={CLASS_OPTIONS}
                  onChange={params => setClassValue(params.value)}
                  value={classValue}
                  clearable={false}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl label={() => "Percentage of outliers"}>
                <Select
                  size={SIZE.compact}
                  options={PERCENT_OPTIONS}
                  onChange={params => setPercentValue(params.value)}
                  value={percentValue}
                  clearable={false}
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>
        </FlexGridItem>
      </FlexGrid>
      <Block height="100%" marginTop={["initial", "initial", "-65px"]} overflow="auto">
        {loading ? (
          <Skeleton
            height="calc(100vh - 200px)"
            overrides={{
              Root: {
                style: () => ({
                  marginTop: "60px",
                }),
              },
            }}
            animation
          />
        ) : (
          <Table
            normalClasses={classValue[0].id as number}
            outlierFraction={percentValue[0].id as number}
            data={data}
          />
        )}
      </Block>
    </Block>
  );
}
