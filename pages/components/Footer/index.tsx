import {
  Box,
  Divider,
  Flex,
  Text,
  Link as ChakraLink,
  Stack,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import DiscordActivity from "../DiscordActivity";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/BEDIRHANSAMSA",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/bedirhansamsa",
      label: "Twitter",
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
  ];

  return (
    <MotionBox
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      borderRadius="xl"
      mt={10}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Box maxW="5xl" mx="auto" p={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
        >
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              bedirhan.dev
            </Text>
            <Text color={textColor} maxW="md">
              Full Stack Developer specializing in modern web applications and
              DevOps solutions.
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  as="a"
                  href={link.href}
                  aria-label={link.label}
                  icon={link.icon}
                  size="md"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
            </HStack>
          </VStack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 10 }}
            align={{ base: "center", md: "flex-start" }}
          >
            <VStack align="flex-start" spacing={3}>
              <Text fontWeight="bold" mb={2}>
                Navigation
              </Text>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <ChakraLink
                    color={textColor}
                    _hover={{ color: "brand.500" }}
                    fontWeight="500"
                  >
                    {item.name}
                  </ChakraLink>
                </Link>
              ))}
            </VStack>

            <VStack align="flex-start" spacing={3}>
              <Text fontWeight="bold" mb={2}>
                Currently
              </Text>
              <SpotifyNowPlaying />
              <DiscordActivity />
            </VStack>
          </Stack>
        </Flex>

        <Divider my={8} />

        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color={textColor}>
            Made with ❤️ by bedirhan
          </Text>
          <Text fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} bedirhan.dev
          </Text>
        </Flex>
      </Box>
    </MotionBox>
  );
}
