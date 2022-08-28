import { MaybeAsync } from "purify-ts/MaybeAsync";
import { z } from "zod";
import axios from "axios";
import { ResponseType } from "axios";
import { inflate } from "pako";

const baseURL =
  process.env.NODE_ENV === "production" ? "https://outlier-detection.github.io/utsd/" : "http://localhost:3000/utsd/";

const axiosConfig: { baseURL: string; responseType: ResponseType; decompress: boolean } = {
  baseURL,
  responseType: "arraybuffer",
  decompress: false,
};

// corresponds to nivo line serie
const zSerie = z.object({
  label: z.string(),
  x: z.array(z.number()),
  y: z.array(z.number()),
});
// a dataset contains the individual series for plotting with metadata
const zDataset = z.object({
  max_x: z.number(),
  min_x: z.number(),
  max_y: z.number(),
  min_y: z.number(),
  data: z.array(zSerie),
});
export type Serie = z.infer<typeof zSerie>;
export type Dataset = z.infer<typeof zDataset>;

const zDatasetMeta = z.object({
  dataset: z.string(),
  counts: z.array(z.number()),
  length: z.number(),
  benchmark: z.string(),
});
export type DatasetMeta = z.infer<typeof zDatasetMeta>;

export function loadDataset(name: string): MaybeAsync<Dataset> {
  return MaybeAsync(async () => {
    const { data } = await axios.get(`/data/gzs/${name}.json.gz`, axiosConfig);
    const unzipped_data = inflate(data, { to: "string" });
    return zDataset.parse(JSON.parse(unzipped_data));
  });
}

export function loadDatasetMeta(): MaybeAsync<DatasetMeta[]> {
  return MaybeAsync(async () => {
    const { data } = await axios.get("/data/datasets.json.gz", axiosConfig);
    const unzipped_data = inflate(data, { to: "string" });
    return z.array(zDatasetMeta).parse(JSON.parse(unzipped_data));
  });
}

export function loadDatasetMetaLocal(): MaybeAsync<DatasetMeta[]> {
  const fs = require("fs");

  return MaybeAsync(async () => {
    const data = fs.readFileSync("public/data/datasets.json.gz");
    const unzipped_data = inflate(data, { to: "string" });
    return z.array(zDatasetMeta).parse(JSON.parse(unzipped_data));
  });
}
