import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { BsSpotify } from "react-icons/bs";
import fetcher from "../../../lib/fetcher";
import useSWR from "swr";
import NextLink from "next/link";

export default function SpotifyNowPlaying() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <Box>
      {data?.is_playing == true ? (
        <Flex gap={2} alignItems="center">
          <BsSpotify size={28} color="#1DB954" />
          <NextLink
            href={data?.song === undefined ? data?.episode.url : data?.song.url}
            passHref
          >
            <Link
              ml={1}
              _hover={{
                textDecoration: "none",
                color: "#1DB954",
              }}
            >
              <Text>
                {data?.song === undefined
                  ? data?.episode.name
                  : data?.song.name}
              </Text>
            </Link>
          </NextLink>

          <Text color="gray.500">{"-"}</Text>
          <Text color="gray.500">
            {data?.song === undefined
              ? data?.episode.show.name
              : data?.song.artist}
          </Text>
        </Flex>
      ) : (
        <Flex gap={2} alignItems="center">
          <BsSpotify size={30} color="#1DB954" />
          <Text color="gray.500">Not playing</Text>
          <Text color="gray.500">{"-"}</Text>
          <Text color="gray.500">Spotify</Text>
        </Flex>
      )}
    </Box>
  );
}
