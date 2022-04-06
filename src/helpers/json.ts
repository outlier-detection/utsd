import { Serie } from "@nivo/line";
import { MaybeAsync } from "purify-ts/MaybeAsync";
import { z } from "zod";
import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "http://localhost:3000" : "http://localhost:3000";

const zDatum = z.object({
  x: z.number(),
  y: z.number(),
});
const zSerie = z.object({
  id: z.string(),
  color: z.string(),
  data: z.array(zDatum),
});
const zSerieArray = z.array(zSerie);

export function loadData(name: string): MaybeAsync<Serie[]> {
  return MaybeAsync(async () => {
    const { data } = await axios.get("/data/series.json", { baseURL });
    return zSerieArray.parse(data);
  });
}
