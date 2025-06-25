import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Progress,
  HStack,
  Flex,
  useColorModeValue,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaToolbox,
  FaGlobe,
  FaDocker,
} from "react-icons/fa";

const MotionBox = motion(Box);

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: FaGlobe,
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Express",
        "Socket.IO",
        "Node.js",
      ],
    },
    {
      name: "Backend",
      icon: FaServer,
      skills: ["C#", "C# WPF", "C# Form", ".NET Core", "ASP.NET", "Prisma ORM"],
    },
    {
      name: "Database",
      icon: FaDatabase,
      skills: ["MongoDB", "MySQL", "Redis", "RabbitMQ"],
    },
    {
      name: "DevOps & Tools",
      icon: FaDocker,
      skills: ["Docker", "Docker Compose", "Git", "GitHub Actions"],
    },
    {
      name: "Languages",
      icon: FaCode,
      skills: ["C#", "JavaScript", "TypeScript", "Golang"],
    },
  ];

  const tagBg = useColorModeValue("brand.50", "brand.900");
  const tagColor = useColorModeValue("brand.800", "brand.200");

  // Projects section data based on resume
  const projects = [
    {
      title: "Akilli Satici E-Commerce Entegration",
      period: "2021 - 2023",
      description:
        "I developed an integration and dropshipping system with existing e-commerce sites.",
    },
    {
      title: "Bulutkart",
      period: "2023 - Present",
      description:
        "I have developed a digital profile and franchise system, replacing conventional business cards with a digital approach. In this system, I managed the design, coding, and DevOps processes of the profile accessed through a link written onto an NFC card.",
    },
  ];

  return (
    <Box as="section" id="skills" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          Skills & Expertise
        </Heading>
        <Text fontSize="lg" maxW="3xl" color="text.secondary">
          My technical toolkit spans across frontend, backend, database, and
          DevOps technologies, allowing me to build complete solutions from
          concept to deployment.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10} mb={16}>
        {categories.map((category, idx) => (
          <MotionBox
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Box
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={useColorModeValue("white", "gray.800")}
              height="full"
              position="relative"
              overflow="hidden"
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                bg: "brand.500",
              }}
            >
              <Flex align="center" mb={4}>
                <Icon as={category.icon} color="brand.500" boxSize={5} mr={3} />
                <Heading size="md">{category.name}</Heading>
              </Flex>
              <Wrap spacing={2}>
                {category.skills.map((skill) => (
                  <WrapItem key={skill}>
                    <Tag
                      size="lg"
                      bg={tagBg}
                      color={tagColor}
                      borderRadius="full"
                      py={2}
                      px={4}
                      fontWeight="medium"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "sm",
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Heading as="h2" size="xl" mt={16} mb={8}>
        Notable Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project, idx) => (
          <MotionBox
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Box
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={useColorModeValue("white", "gray.800")}
              height="full"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Heading size="md" mb={2} color="brand.500">
                {project.title}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={3}>
                {project.period}
              </Text>
              <Text color="text.secondary">{project.description}</Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
