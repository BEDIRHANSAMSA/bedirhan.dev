import { Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavButton({
  title,
  to,
  children,
}: {
  title: string;
  to: string;
  children?: any;
}) {
  return (
    <Button background="transparent">
      <Flex gap={2}>
        <NextLink passHref href={to ?? ""}>
          <Link>{title}</Link>
        </NextLink>
        {children}
      </Flex>
    </Button>
  );
}
