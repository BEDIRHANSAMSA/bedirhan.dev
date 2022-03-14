import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  fonts: {
    body: "Cairo",
  },
  colors: {},
});

export default theme;
