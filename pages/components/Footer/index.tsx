import { Box, Divider, Flex, Text, Link } from "@chakra-ui/react";
import DiscordActivity from "../DiscordActivity";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box ml={3}>
      <Divider />
      <Flex gap={3} direction="column" mt={5}>
        <SpotifyNowPlaying />
         <DiscordActivity /> 
        <Box textAlign="center">
          <Text>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by bedirhan
          </Text>
          <Text>
            Copyright ©{" "}
            <NextLink passHref href="/">
              <Link>bedirhan.dev</Link>
            </NextLink>{" "}
            {new Date().getFullYear()}
            {"."}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
