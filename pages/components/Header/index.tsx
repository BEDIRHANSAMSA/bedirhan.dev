import { Center, Divider, Flex, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavButton from "../NavButton";
import ThemeButton from "../ThemeButton";
import { BiLinkExternal } from "react-icons/bi";

export default function Header() {
  return (
    <Flex gap={3}>
      {buttons.map(({ title, href, icon, target }, index) => (
        <NavButton target={target} title={title} href={href} key={index}>
          {icon}
        </NavButton>
      ))}
      <Spacer />
      <ThemeButton />
    </Flex>
  );
}

const buttons = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/bedirhansamsa",
    target: "_blank",
    icon: <BiLinkExternal />,
  },
  {
    title: "GitHub",
    href: "https://github.com/BEDIRHANSAMSA",
    target: "_blank",
    icon: <BiLinkExternal />,
  },
];
