import type { AppProps } from "next/app";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/cairo";
import "@fontsource-variable/inter";
import theme from "../theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait" initial={false}>
        <Container maxW="5xl" py={8}>
          <Header />
          <Box as="main" py={8}>
            <Component {...pageProps} key={router.route} />
          </Box>
          <Footer />
        </Container>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
