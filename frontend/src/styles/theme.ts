import baseStyled, { ThemedStyledInterface } from "styled-components";

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
  custom: mediaQuery,
};

const color = {
  white: "#ffffff",
  black: "#000000",
  gray0: "#f8f9fa",
  gray1: "#f1f3f5",
  gray2: "#e9ecef",
  gray3: "#dee2e6",
  gray4: "#ced4da",
  gray5: "#adb5bd",
  gray6: "#868e96",
  gray7: "#495057",
  gray8: "#343a40",
  gray9: "#212529",
  silver: "#bdc3c7",
  default: "#495057",
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
  color,
  fontSizes,
  secondaryColors,
  media,
  mediaQuery,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
