import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme({
  colors: {
    primary: "#2DCA86",
    secondary: "#AD1E1D",
  },
  fonts: {
    primary: "'Bodoni Moda', serif",
    secondary: "'Bangers', cursive",
    tertiary: "'Tangerine', cursive",
    quarter: "'Londrina Shadow', cursive",
    barra: "'Libre Barcode 39 Text', cursive",
  },
  components: {
    Tooltip: {
      variants: {
        solid: (props) => ({
          bg: "transparent",
          boxShadow: "none",
          fontSize: "xl",
          fontFamily: "primary",
          color: mode("secondary", "primary")(props),
          fontWeight: "bold",
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        backgroundColor: mode("gray.100", undefined)(props),
        height: "100%",
      },
    }),
  },
});
