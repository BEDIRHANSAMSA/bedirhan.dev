import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  HStack,
  VStack,
  Button,
  useColorModeValue,
  Badge,
  Icon,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Hero() {
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, white)",
    "linear(to-br, gray.800, gray.900)"
  );

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bgGradient={bgGradient}
      borderRadius="xl"
      p={{ base: 6, md: 10 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={{ base: 8, md: 12 }}
      >
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={4}
          flex="1"
        >
          <MotionHeading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box as="span" display="inline-block">
              Hey{" "}
              <motion.span
                initial={{ rotateZ: 0 }}
                animate={{ rotateZ: [0, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                // @ts-ignore - Chakra UI type conflict with framer-motion
                display="inline-block"
              >
                👋
              </motion.span>
            </Box>{" "}
            I{"'"}m <Box as="span" color="brand.500">Bedirhan Samsa</Box>
          </MotionHeading>

          <MotionHeading
            as="h2"
            size="md"
            opacity={0.8}
            fontWeight="500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full Stack Developer
          </MotionHeading>
          
          <HStack spacing={3} mt={1} wrap="wrap">
            <Badge colorScheme="blue" py={1} px={2}>React</Badge>
            <Badge colorScheme="purple" py={1} px={2}>Next.js</Badge>
            <Badge colorScheme="green" py={1} px={2}>C#</Badge>
            <Badge colorScheme="red" py={1} px={2}>.NET</Badge>
            <Badge colorScheme="yellow" py={1} px={2}>JavaScript</Badge>
            <Badge colorScheme="orange" py={1} px={2}>DevOps</Badge>
          </HStack>

          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            maxW="xl"
            color="text.secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I have been involved in end-to-end coding since the beginning of my career, 
            working on design, backend, frontend, and DevOps. I focus on building ERP systems 
            and e-commerce integrations, with experience in startup environments.
          </MotionText>

          <VStack spacing={2} align={{ base: "center", md: "flex-start" }} mt={2} width="100%">
            <HStack spacing={2}>
              <Icon as={MdEmail} color="brand.500" />
              <Link href="mailto:me@bedirhan.dev" color="text.secondary">
                me@bedirhan.dev
              </Link>
            </HStack>
            <HStack spacing={2}>
              <Icon as={MdPhone} color="brand.500" />
              <Text color="text.secondary">+90 537 838 47 43</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaMapMarkerAlt} color="brand.500" />
              <Text color="text.secondary">Istanbul / Turkey</Text>
            </HStack>
          </VStack>

          <HStack spacing={4} mt={4}>
            <Button
              as="a"
              href="https://github.com/BEDIRHANSAMSA"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGithub />}
              size="md"
              variant="outline"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://twitter.com/bedirhansamsa"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaTwitter />}
              size="md"
              variant="outline"
            >
              Twitter
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/bedirhansamsa/"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaLinkedin />}
              size="md"
              colorScheme="blue"
            >
              LinkedIn
            </Button>
          </HStack>
        </VStack>

        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MotionImage
            src="/me.png"
            alt="Bedirhan Samsa"
            w={{ base: "200px", md: "220px" }}
            h={{ base: "200px", md: "220px" }}
            borderRadius="full"
            objectFit="cover"
            border="4px solid"
            borderColor="brand.500"
            boxShadow="xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </MotionBox>
      </Flex>
    </Box>
  );
}
