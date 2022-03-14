import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeButton(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Change Theme"
      onClick={toggleColorMode}
      color={useColorModeValue("baseText", "white")}
      icon={
        colorMode === "light" ? (
          <BsFillMoonFill />
        ) : (
          <BsFillSunFill color="yellow" />
        )
      }
      {...props}
    />
  );
}
