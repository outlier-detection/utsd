import { Breakpoints, MediaQuery, Theme } from "baseui/theme";
import { mapObject } from "./functional";
import { DarkTheme, LightTheme } from "baseui";

const breakpoints: Breakpoints = { small: 670, medium: 920, large: 1280 };
const mediaquery: MediaQuery = mapObject(breakpoints, (v: number) => `@media screen and (min-width: ${v}px)`);
const ResponsiveTheme = { breakpoints, mediaquery };

const themes: { lightTheme: Theme; darkTheme: Theme } = {
  lightTheme: { ...LightTheme, ...ResponsiveTheme },
  darkTheme: { ...DarkTheme, ...ResponsiveTheme },
};

export { breakpoints, themes };
