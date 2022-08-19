import useWindowDimensions from "../hooks/useWindowDimensions";
import { Dataset, Serie } from "../helpers/json";
import * as R from "remeda";
import * as Plotly from "plotly.js";
import Plot from "react-plotly.js";

type LineProps = {
  dataset: Dataset;
};

function rawDataToPlotly(series: Serie[]): Plotly.Data[] {
  return R.map(series, s => ({
    x: s.x,
    y: s.y,
    type: "scattergl",
    mode: "lines",
    marker: { color: s.label === "normal" ? "rgba(0,150,0,0.5)" : "rgba(255,0,0,0.5)" },
    showlegend: false,
  }));
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PlotlyLine = (props: LineProps) => {
  const { height, width } = useWindowDimensions();
  const { data } = props.dataset;

  return (
    // eslint-disable-next-line
    // @ts-ignore
    <Plot
      data={rawDataToPlotly(data)}
      layout={{
        width: width > 970 ? (width > 1680 ? 1280 : width / 1.5) : width - 36,
        height: height - 225,
        xaxis: { showgrid: false, tickfont: { size: 10 } },
        yaxis: { showgrid: true, tickfont: { size: 10 } },
        margin: { l: 40, r: 0, t: 0, b: 15 },
      }}
      config={{ displaylogo: false }}
    />
  );
};

export default PlotlyLine;
