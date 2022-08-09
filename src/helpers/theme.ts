import { Breakpoints, MediaQuery, Theme } from "baseui/theme";
import { mapObject } from "./functional";
import { DarkTheme, LightTheme } from "baseui";

const breakpoints: Breakpoints = { small: 670, medium: 970, large: 970 };
const mediaquery: MediaQuery = mapObject(breakpoints, (v: number) => `@media screen and (min-width: ${v}px)`);
const ResponsiveTheme = { breakpoints, mediaquery };

const themes: { lightTheme: Theme; darkTheme: Theme } = {
  lightTheme: { ...LightTheme, ...ResponsiveTheme },
  darkTheme: { ...DarkTheme, ...ResponsiveTheme },
};

export { breakpoints, themes };
