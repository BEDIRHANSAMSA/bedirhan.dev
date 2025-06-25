import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  HStack,
  Tag,
  Button,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionLinkBox = motion(LinkBox);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Integration System",
      description:
        "A comprehensive platform that integrates multiple e-commerce channels with an ERP system, synchronizing orders, products, and inventory.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["C#", ".NET", "React", "Microsoft SQL", "Azure"],
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard providing real-time insights and analytics for business metrics, with customizable widgets and reports.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Next.js", "TypeScript", "WebSockets", "Chart.js", "Redux"],
    },
    {
      title: "DevOps Pipeline Automation",
      description:
        "Automated CI/CD pipeline for containerized applications, reducing deployment time and ensuring consistent builds across environments.",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Bash"],
    },
    {
      title: "Inventory Management System",
      description:
        "A scalable inventory management solution with barcode scanning, automated reordering, and comprehensive reporting features.",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    },
  ];

  const cardBg = useColorModeValue("white", "gray.800");
  const tagBg = useColorModeValue("brand.50", "brand.900");
  const tagColor = useColorModeValue("brand.800", "brand.200");

  return (
    <Box as="section" id="projects" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        <Text fontSize="lg" maxW="3xl" color="text.secondary">
          A selection of projects that showcase my expertise in building
          scalable applications, integrations, and automated systems.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
        {projects.map((project, idx) => (
          <MotionLinkBox
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg={cardBg}
            height="100%"
          >
            <VStack align="stretch" height="100%">
              <Box position="relative" height="200px" overflow="hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  transition="all 0.3s"
                  _groupHover={{ transform: "scale(1.05)" }}
                />
              </Box>

              <VStack align="flex-start" p={6} spacing={4} flex="1">
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text color="text.secondary">{project.description}</Text>

                <HStack flexWrap="wrap" spacing={2} mt="auto">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      size="sm"
                      bg={tagBg}
                      color={tagColor}
                      borderRadius="full"
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={4} mt={4} alignSelf="flex-end">
                  {project.githubUrl && (
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<FaGithub />}
                      size="sm"
                      variant="ghost"
                    >
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<FaExternalLinkAlt />}
                      size="sm"
                      colorScheme="blue"
                    >
                      Live
                    </Button>
                  )}
                </HStack>
              </VStack>
            </VStack>
          </MotionLinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
