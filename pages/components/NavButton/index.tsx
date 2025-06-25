import { Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

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
        <Link href={to ?? ""} legacyBehavior>
          <ChakraLink>{title}</ChakraLink>
        </Link>
        {children}
      </Flex>
    </Button>
  );
}
