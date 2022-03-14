import { Flex, Spacer } from "@chakra-ui/react";
import NavButton from "../NavButton";
import ThemeButton from "../ThemeButton";
import { BiLinkExternal } from "react-icons/bi";

export default function Header() {
  const buttons = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Blog",
      to: "/blog",
    },
  ];

  return (
    <Flex gap={3}>
      {buttons.map((button, index) => (
        <NavButton {...button} key={index}></NavButton>
      ))}
      <Spacer />
      <ThemeButton />
    </Flex>
  );
}
