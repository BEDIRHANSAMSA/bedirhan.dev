import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavButton({
  title,
  href,
  target,
  children,
  ...props
}: {
  title: string;
  href: string;
  target?: string;
  children?: any;
}) {
  const router = useRouter();

  return (
    <Button
      fontWeight={router.asPath === href ? "bold" : "normal"}
      background="transparent"
      {...props}
    >
      <Flex gap={2}>
        <Link href={href}>
          {target === "_blank" ? (
            <a
              style={{
                textDecoration: "none",
              }}
              target={target}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </Link>
        {children}
      </Flex>
    </Button>
  );
}
