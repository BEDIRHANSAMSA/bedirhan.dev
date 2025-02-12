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
    /*
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "Projects",
      to: "/projects",
    },
    {
      title: "Contact",
      to: "/contact",
    },
    */
    {
      title: "Twitter",
      to: "https://twitter.com/bedirhansamsa",
      icon: <BiLinkExternal />,
    },
    {
      title: "Github",
      to: "https://github.com/BEDIRHANSAMSA",
      icon: <BiLinkExternal />,
    },
  ];

  return (
    <Flex gap={3}>
      {buttons.map((button, index) => (
        <NavButton {...button} key={index}>
          {button.icon}
        </NavButton>
      ))}
      <Spacer />
      <ThemeButton />
    </Flex>
  );
}
