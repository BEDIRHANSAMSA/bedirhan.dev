import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/cairo";
import theme from "../theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box mt={5} maxW="2xl" mx="auto">
        <Header />
        <Box mb={16} mt={16} ml={3}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
