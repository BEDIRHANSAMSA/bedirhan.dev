import { Box, Text, Heading, Image, Flex, Spacer } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex>
      <Flex direction="column" justifyContent="left">
        <Heading>Hey👋 I{"'"}m Bedirhan</Heading>
        <Heading mt={2} as="h6" size="xs ">
          Full Stack Developer
        </Heading>
        <Text fontSize={20} mt={5} maxW="xl">
          I{"'"}m creating modern and responsive applications and interested in
          topics such as C#, Computer Technologies, science, sociology. I{"'"}m
          2nd-year student at Istanbul Medipol University.
        </Text>
      </Flex>
      <Spacer />
      <Flex justifyContent="center">
        <Image alt="Logo" src="logo.svg" w={28} h={28} borderRadius="full" />
      </Flex>
    </Flex>
  );
}
