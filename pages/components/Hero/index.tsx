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
          {/* I{"'"}m creating modern and responsive applications and interested in
          topics such as JavaScript, C#, Computer Technologies, science, sociology. I
          graduated from Istanbul Medipol University in 2022 with the 1st rank. */}

          I am a Full Stack Developer with expertise in backend, frontend, and DevOps. 
          I have built and maintained startup projects, focusing on ERP systems and 
          e-commerce integrations. Proficient in React, Next.js, C#, and Docker, I continuously
          enhance my DevOps skills to create efficient and scalable solutions.
        </Text>
      </Flex>
      <Spacer />
      <Flex justifyContent="center">
        <Image alt="Logo" src="me.png" w={28} h={28} borderRadius="full" />
      </Flex>
    </Flex>
  );
}
