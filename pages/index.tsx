import { Box, VStack, Heading } from "@chakra-ui/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={16} align="stretch">
        <Hero />
        <About />
        <Skills />
      </VStack>
    </MotionBox>
  );
}
