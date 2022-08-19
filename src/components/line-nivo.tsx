export {};
// Not used (performance bad for a moderate number of series)
// import { LineCanvas } from "@nivo/line";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import {Dataset} from "../helpers/json";
//
// type LineProps = {
//   dataset: Dataset;
// };
//
// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const LineNivo = (props: LineProps) => {
//   const { width } = useWindowDimensions();
//   const {min, max, series} = props.dataset
//
//   return (
//       <LineCanvas
//           data={series}
//           height={540}
//           width={width > 970 ? width > 1280 ? 666 : width / 2 : width}
//           margin={{ top: 0, right: 50, bottom: 20, left: 50 }}
//           xScale={{ type: "linear" }}
//           yScale={{ type: "linear", min, max }}
//           curve="linear"
//           colors={d => d.label == "normal" ? "rgba(0,200,0,1)" : "rgba(200,0,0,1)"}
//           enablePoints={false}
//           enableGridX={false}
//           lineWidth={0.7}
//           isInteractive={false}
//       />
//   );
// }
//
// export default LineNivo;
