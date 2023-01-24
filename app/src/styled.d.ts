import "styled-components"
import { theme } from "./global/styles/theme"

type CustomTheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
