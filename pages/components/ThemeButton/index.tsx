import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const MotionIconButton = motion(IconButton);

export default function ThemeButton(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const tooltipLabel =
    colorMode === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <Tooltip label={tooltipLabel} hasArrow>
      <MotionIconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? (
            <BsFillMoonFill />
          ) : (
            <BsFillSunFill color="yellow" />
          )
        }
        variant="ghost"
        size="md"
        borderRadius="md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, colorMode === "light" ? 15 : -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 0.5 }}
        {...props}
      />
    </Tooltip>
  );
}
