import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  useColorModeValue,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeButton from "../ThemeButton";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const { scrollY: scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const headerOpacity = useTransform(scrollYProgress, [0, 50], [0.95, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 100], [1, 0.98]);
  const headerY = useTransform(scrollYProgress, [0, 100], [0, -5]);
  const headerShadow = useTransform(
    scrollYProgress,
    [0, 100],
    ["0px 4px 20px rgba(0, 0, 0, 0.05)", "0px 4px 20px rgba(0, 0, 0, 0.15)"]
  );

  const gradientX = useTransform(
    mouseX,
    [0, typeof window !== "undefined" ? window.innerWidth : 1000],
    ["-20%", "120%"]
  );

  const gradientY = useTransform(
    mouseY,
    [0, typeof window !== "undefined" ? window.innerHeight : 800],
    ["-20%", "120%"]
  );

  const background = useMotionTemplate`
    ${useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(26, 32, 44, 0.7)")}
  `;

  // Update scroll position for other effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
  ];

  const externalLinks = [
    {
      name: "GitHub",
      href: "https://github.com/BEDIRHANSAMSA",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/bedirhansamsa",
    },
  ];

  return (
    <Box as="header" position="sticky" top={0} zIndex={10} px={4} pt={2}>
      <MotionFlex
        style={{
          boxShadow: headerShadow,
          y: headerY,
          scale: headerScale,
          opacity: headerOpacity,
          backdropFilter: "blur(10px)",
          background,
        }}
        color={useColorModeValue("gray.600", "white")}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        py={4}
        px={{ base: 4, md: 6 }}
        align="center"
        borderRadius="xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          y: -2,
          transition: { duration: 0.2 },
        }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/" legacyBehavior={false}>
            <MotionBox
              textAlign={{ base: "center", md: "left" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
              fontSize="xl"
              cursor="pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              position="relative"
              display="flex"
              alignItems="center"
            >
              <Box
                as={motion.span}
                color="brand.500"
                fontSize="2xl"
                fontWeight="extrabold"
                mr={1}
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 5, duration: 0.5 }}
              >
                B
              </Box>
              <Box as="span" fontWeight="medium">
                edirhan
              </Box>
              <Box as="span" color="brand.500" mx={1}>
                .
              </Box>
              <Box as="span" fontWeight="medium">
                dev
              </Box>
            </MotionBox>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <HStack
              as={motion.nav}
              spacing={6}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {navItems.map((navItem, index) => (
                <MotionBox
                  key={navItem.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                >
                  <Link href={navItem.href} legacyBehavior={false}>
                    <MotionBox
                      px={2}
                      py={1}
                      rounded="md"
                      cursor="pointer"
                      position="relative"
                      fontWeight="500"
                      color={
                        router.pathname === navItem.href
                          ? "brand.500"
                          : "text.secondary"
                      }
                      _hover={{
                        color: "brand.500",
                      }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ y: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {navItem.name}
                      {router.pathname === navItem.href && (
                        <MotionBox
                          position="absolute"
                          bottom="-2px"
                          left={0}
                          right={0}
                          height="2px"
                          bg="brand.500"
                          borderRadius="full"
                          layoutId="navIndicator"
                          initial={{ opacity: 0, width: "0%" }}
                          animate={{ opacity: 1, width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </MotionBox>
                  </Link>
                </MotionBox>
              ))}
            </HStack>
          </Flex>
        </Flex>

        <Flex alignItems="center" gap={3}>
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            {externalLinks.map((link) => (
              <MotionBox
                key={link.name}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.95 }}
              >
                <Button
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="sm"
                >
                  {link.name}
                </Button>
              </MotionBox>
            ))}
          </HStack>
          <ThemeButton />
        </Flex>
      </MotionFlex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          p={4}
          mt={2}
          bg={useColorModeValue(
            "rgba(255, 255, 255, 0.7)",
            "rgba(26, 32, 44, 0.7)"
          )}
          borderRadius="xl"
          boxShadow="lg"
          display={{ md: "none" }}
          backdropFilter="blur(10px)"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          as={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Stack as="nav" spacing={4}>
            {navItems.map((navItem, index) => (
              <Link
                key={navItem.name}
                href={navItem.href}
                legacyBehavior={false}
              >
                <Box
                  as={motion.div}
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{
                    bg: useColorModeValue(
                      "rgba(240, 240, 250, 0.3)",
                      "rgba(50, 60, 70, 0.3)"
                    ),
                  }}
                  cursor="pointer"
                  fontWeight="500"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.05 },
                  }}
                >
                  {navItem.name}
                </Box>
              </Link>
            ))}
            {externalLinks.map((link, index) => (
              <Box
                key={link.name}
                as={motion.a}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                px={3}
                py={2}
                rounded="md"
                _hover={{
                  bg: useColorModeValue(
                    "rgba(240, 240, 250, 0.3)",
                    "rgba(50, 60, 70, 0.3)"
                  ),
                }}
                cursor="pointer"
                fontWeight="500"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: (navItems.length + index) * 0.05 },
                }}
              >
                {link.name}
              </Box>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
