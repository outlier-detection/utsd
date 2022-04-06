import { LineCanvas, Serie } from "@nivo/line";

type LineProps = {
  data: Serie[];
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Line = (props: LineProps) => (
  <LineCanvas
    data={props.data}
    height={800}
    width={1980}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: "linear" }}
    yScale={{ type: "linear" }}
    curve="linear"
    colors={d => d.color}
    pointColor={{ from: "color", modifiers: [["opacity", 0.1]] }}
    enableGridX={false}
    lineWidth={1}
    pointBorderColor={{ from: "serieColor" }}
    isInteractive={false}
  />
);

export default Line;
