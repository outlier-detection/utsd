import {MaybeAsync} from "purify-ts/MaybeAsync";
import {z} from "zod";
import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "http://localhost:3000" : "http://localhost:3000";

// corresponds to nivo line serie
const zSerie = z.object({
    label: z.string(),
    x: z.array(z.number()),
    y: z.array(z.number())
});
// a dataset contains the individual series for plotting with metadata
const zDataset = z.object({
    max_x: z.number(),
    min_x: z.number(),
    max_y: z.number(),
    min_y: z.number(),
    data: z.array(zSerie)
})
export type Serie = z.infer<typeof zSerie>
export type Dataset = z.infer<typeof zDataset>

const zDatasetMeta = z.object({
    dataset: z.string(),
    counts: z.array(z.number()),
    length: z.number(),
    benchmark: z.string()
});
export type DatasetMeta = z.infer<typeof zDatasetMeta>

export function loadDataset(name: string): MaybeAsync<Dataset> {
    return MaybeAsync(async () => {
        const {data} = await axios.get(`/data/jsons/${name}.json`, {baseURL});
        return zDataset.parse(data);
    });
}

export function loadDatasetMeta(): MaybeAsync<DatasetMeta[]> {
    return MaybeAsync(async () => {
        const {data} = await axios.get("/data/datasets.json", {baseURL});
        return z.array(zDatasetMeta).parse(data)
    })
}
