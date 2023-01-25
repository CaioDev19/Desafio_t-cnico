export const theme = {
  COLORS: {
    blue: "#0F52BA",

    gray: "#EEEEEE",
    gray_100: "#BFBFBF",

    white: "#FFFFFF",
    whiteShade: "#E5E5E5",

    black: "#000000",
    black_100: "#373737",
    black_200: "##2C2C2C",
  },
  FONT_SIZE: {
    exml: "0.65rem",
    sml: "0.9rem",
    rgl: "1rem",
    mdm: "1.25rem",
    lrg: "1.7rem",
    exl: "1.8rem",
    xl: "2.5rem",
  },
  FONT_WEIGHT: {
    wek: "300",
    rgl: "400",
    str: "600",
    sstr: "700",
  },
  BREAKPOINTS: {
    tablet: 1000,
  },
}

export type Colors = keyof typeof theme.COLORS
export type FontSize = keyof typeof theme.FONT_SIZE
export type FontWeight = keyof typeof theme.FONT_WEIGHT
