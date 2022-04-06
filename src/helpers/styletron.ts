import { Client, Server } from "styletron-engine-atomic";
import { DebugEngine } from "styletron-react";

export const isServer = typeof window === "undefined";

const getHydrate = () => document.getElementsByClassName("_styletron_hydrate_") as HTMLCollectionOf<HTMLStyleElement>;

export const styletron: Client | Server = isServer ? new Server() : new Client({ hydrate: getHydrate() });

export const styletronDebug =
  /*eslint-disable*/
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
