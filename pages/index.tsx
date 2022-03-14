import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import { getLayout as getLandingLayout } from "./layouts/LandingLayout";

export default function Home() {
  return (
    <Box>
      <Hero />
    </Box>
  );
}

Home.getLayout = getLandingLayout;
