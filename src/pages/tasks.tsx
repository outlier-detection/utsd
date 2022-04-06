import * as React from "react";

import dynamic from "next/dynamic";
import { Serie } from "@nivo/line";
import { loadData } from "../helpers/json";
import { useEffect } from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Block } from "baseui/block";

const Line = dynamic(() => import("../components/line"), { ssr: false });

function increaseY(oldData: Serie, toAdd: number = 100) {
  const newData = oldData.data.map(({ x, y }) => ({ x, y: (y as number) + toAdd }));
  const newName = oldData.id + toAdd.toString();
  return { ...oldData, id: newName, data: newData };
}

const fakeData = {
  id: "Item1",
  color: "rgba(255, 0, 0)",
  data: [
    {
      x: 0,
      y: 109,
    },
    {
      x: 1,
      y: 47,
    },
    {
      x: 2,
      y: 170,
    },
    {
      x: 3,
      y: 81,
    },
    {
      x: 4,
      y: 58,
    },
    {
      x: 5,
      y: 117,
    },
    {
      x: 6,
      y: 245,
    },
    {
      x: 7,
      y: 28,
    },
    {
      x: 8,
      y: 95,
    },
    {
      x: 9,
      y: 46,
    },
    {
      x: 10,
      y: 241,
    },
    {
      x: 11,
      y: 103,
    },
    {
      x: 12,
      y: 217,
    },
    {
      x: 13,
      y: 92,
    },
    {
      x: 14,
      y: 277,
    },
    {
      x: 15,
      y: 56,
    },
  ],
};

const data = [fakeData, increaseY(fakeData)];

export default function Tasks() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Serie[]>([]);

  useEffect(() => {
    loadData("example")
      .run()
      .then(result => {
        // setData(result.orDefault([]));

        const fullFakeData = Array.from(Array(50).keys()).map(i => increaseY(fakeData, i * 10));
        setData(fullFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <Block>
      <FlexGrid flexGridColumnCount={1}>
        <FlexGridItem>
          <Block height="calc(100vh - 150px)">{isLoading ? <p>Loading...</p> : <Line data={data} />}</Block>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
}
