import React from "react";
import {
  StatefulDataTable,
  CategoricalColumn,
  NumericalColumn,
  StringColumn,
  BatchAction,
  RowAction,
} from "baseui/data-table";
import { DatasetMeta } from "../helpers/json";
import { ChevronRight } from "baseui/icon";
import { Button, SIZE } from "baseui/button";
import { useRouter } from "next/router";
import * as R from "remeda";
import { Block } from "baseui/block";
import { useStyletron } from "baseui";
import useWindowDimensions from "../hooks/useWindowDimensions";

function reduceCounts(counts: number[], normalClasses: number, outlierFraction: number) {
  const add = (a: number, b: number) => a + b;
  const inliers = counts.slice(0, normalClasses).reduce(add, 0);
  const requested_outliers = Math.floor((-inliers * outlierFraction) / (outlierFraction - 1));
  const available_outliers = counts.slice(normalClasses).reduce(add, 0);
  const outliers = available_outliers >= requested_outliers ? requested_outliers : 0;
  return { inliers, outliers };
}

export function datasetToRow(dataset: DatasetMeta) {
  return { id: dataset.dataset, data: dataset };
}

function createColumns(normalClasses: number, outlierFraction: number) {
  return [
    StringColumn({
      title: "Dataset",
      mapDataToValue: (data: DatasetMeta) => data.dataset,
    }),
    NumericalColumn({
      title: "Inliers",
      mapDataToValue: (data: DatasetMeta) => reduceCounts(data.counts, normalClasses, outlierFraction)["inliers"],
    }),
    NumericalColumn({
      title: "Outliers",
      mapDataToValue: (data: DatasetMeta) => reduceCounts(data.counts, normalClasses, outlierFraction)["outliers"],
    }),
    NumericalColumn({
      title: "Length",
      mapDataToValue: (data: DatasetMeta) => data.length,
    }),
    NumericalColumn({
      title: "Initial Classes",
      mapDataToValue: (data: DatasetMeta) => data.counts.length,
    }),
    CategoricalColumn({
      title: "Benchmark",
      mapDataToValue: (data: DatasetMeta) => data.benchmark,
    }),
  ];
}

interface TableProps {
  normalClasses: number;
  outlierFraction: number;
  data: DatasetMeta[];
}

export function filterUnavailableTasks(normalClasses: number, outlierFraction: number) {
  return ({ counts }: DatasetMeta) => {
    const { outliers } = reduceCounts(counts, normalClasses, outlierFraction);
    return counts.length > normalClasses && outliers > 0;
  };
}

interface DatasetRow {
  id: string;
  data: DatasetMeta;
}

export default function Table(props: TableProps) {
  const [_, theme] = useStyletron();
  const { width } = useWindowDimensions();
  const initialRows: DatasetRow[] = props.data
    .filter(filterUnavailableTasks(props.normalClasses, props.outlierFraction))
    .map(datasetToRow);
  const columns = createColumns(props.normalClasses, props.outlierFraction);
  const router = useRouter();

  const batchActions = [
    {
      label: "Download",
      onClick: ({ selection, clearSelection }: { selection: DatasetRow[]; clearSelection: () => void }) => {
        R.forEach(selection, row => {
          window.open(`/utsd/data/zips/${row.id}.7z`, "_blank");
        });
        clearSelection();
      },
    },
  ];

  const rowActions = [
    {
      label: "Open Task",
      onClick: ({ row }: { row: DatasetRow }) =>
        router.push(
          "/tasks/[id]/[classes]/[fraction]",
          `/tasks/${row.id}/${props.normalClasses}/${props.outlierFraction}`
        ),
      renderIcon: () => (
        <Button size={SIZE.compact} endEnhancer={ChevronRight}>
          Open Task
        </Button>
      ),
    },
  ];

  return (
    <Block minWidth={`${theme.breakpoints.medium}px`} overflow="hidden" height="100%">
      <StatefulDataTable
        columns={columns}
        rows={initialRows}
        batchActions={batchActions as BatchAction[]}
        rowActions={rowActions as RowAction[]}
        resizableColumnWidths={false}
        filterable={width > theme.breakpoints.medium}
        searchable={width > theme.breakpoints.medium}
      />
    </Block>
  );
}
