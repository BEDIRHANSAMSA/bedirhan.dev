import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
  Divider,
  Circle,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const MotionBox = motion(Box);

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

function Feature({ title, text, icon }: FeatureProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <VStack
        align="flex-start"
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="lg"
        boxShadow="md"
        height="full"
        spacing={4}
        borderLeft="4px solid"
        borderColor="brand.500"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "lg",
          borderColor: "brand.400",
        }}
        transitionProperty="transform, box-shadow, border-color"
        transitionDuration="0.3s"
      >
        <Flex
          w={12}
          h={12}
          align="center"
          justify="center"
          rounded="full"
          bg={useColorModeValue("brand.50", "brand.900")}
          color="brand.500"
          mb={2}
        >
          {icon}
        </Flex>
        <Heading fontSize="xl">{title}</Heading>
        <Text color="text.secondary">{text}</Text>
      </VStack>
    </MotionBox>
  );
}

interface ExperienceProps {
  company: string;
  title: string;
  period: string;
  description: string[];
  companyLink?: string;
}

function Experience({
  company,
  title,
  period,
  description,
  companyLink,
}: ExperienceProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      p={5}
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
      sx={{
        transitionProperty: "transform, box-shadow",
        transitionDuration: "0.3s",
      }}
    >
      <Flex align="start" mb={4}>
        <Circle
          size="40px"
          bg={useColorModeValue("brand.50", "brand.900")}
          color="brand.500"
          mr={4}
        >
          <Icon as={FaBriefcase} boxSize={5} />
        </Circle>
        <Box>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Link
            href={companyLink}
            isExternal
            color="brand.500"
            fontWeight="medium"
          >
            {company}
          </Link>
          <HStack mt={1}>
            <Icon as={FaCalendarAlt} color="gray.500" />
            <Text color="gray.500" fontSize="sm">
              {period}
            </Text>
          </HStack>
        </Box>
      </Flex>
      <Box ml={{ base: 0, md: "56px" }}>
        {description.map((item, index) => (
          <Text
            key={index}
            color="text.secondary"
            mb={2}
            display="flex"
            alignItems="flex-start"
          >
            <Box as="span" mr={2} fontSize="lg">
              •
            </Box>
            {item}
          </Text>
        ))}
      </Box>
    </MotionBox>
  );
}

interface EducationProps {
  institution: string;
  degree: string;
  period: string;
}

function Education({ institution, degree, period }: EducationProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Flex align="start" mb={2}>
        <Circle
          size="36px"
          bg={useColorModeValue("brand.50", "brand.900")}
          color="brand.500"
          mr={4}
        >
          <Icon as={FaGraduationCap} boxSize={4} />
        </Circle>
        <Box>
          <Text fontWeight="bold">{institution}</Text>
          <Text color="text.secondary">{degree}</Text>
          <HStack mt={1}>
            <Icon as={FaCalendarAlt} color="gray.500" />
            <Text color="gray.500" fontSize="sm">
              {period}
            </Text>
          </HStack>
        </Box>
      </Flex>
    </MotionBox>
  );
}

export default function About() {
  return (
    <Box as="section" id="about" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg" maxW="3xl" color="text.secondary">
          I have been involved in end-to-end coding since the beginning of my
          career. I have worked on various aspects such as design, backend,
          frontend, and DevOps. For the past year, I have been focusing on
          learning DevOps practices. I have handled the end-to-end development
          and maintenance of multiple startup projects.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={12} mb={16}>
        <Feature
          icon={<Icon as={FaLaptopCode} w={6} h={6} />}
          title="Frontend Development"
          text="Creating responsive and intuitive user interfaces using React, Next.js, and modern CSS frameworks to deliver exceptional user experiences."
        />
        <Feature
          icon={<Icon as={FaServer} w={6} h={6} />}
          title="Backend Development"
          text="Building robust server-side solutions using C# and .NET with efficient database design to power scalable applications."
        />
        <Feature
          icon={<Icon as={FaTools} w={6} h={6} />}
          title="DevOps"
          text="Implementing CI/CD pipelines, containerization with Docker, and cloud infrastructure management to ensure reliable deployments."
        />
        <Feature
          icon={<Icon as={FaCode} w={6} h={6} />}
          title="Full Stack Solutions"
          text="Integrating frontend and backend technologies to build complete, end-to-end solutions that meet business needs and user requirements."
        />
      </SimpleGrid>

      <Divider my={10} />

      <Heading as="h2" size="xl" mb={10}>
        Experience
      </Heading>

      <VStack spacing={8} align="stretch" mb={16}>
        <Experience
          company="Manim Finans Teknolojileri A.Ş"
          title="Full Stack Developer"
          period="08/2024 - Present"
          description={[
            "Actively contributing to the enhancement, bug fixing, and development of the Manim Finance's ERP program.",
            "Responsibilities encompass adapting services to new structures, rectifying errors, and seamlessly incorporating new ERP systems into the existing infrastructure.",
            "Ensuring the smooth operation and improvement of the ERP ecosystem, optimizing operational efficiency and facilitating business processes.",
          ]}
        />

        <Experience
          company="Teknoduvar Mobil Teknoloji"
          title="Full Stack Developer"
          period="2021 - 2023"
          description={[
            "Added the Dropshipping integration feature to the e-commerce program I developed.",
            "The integration includes a balance system where suppliers can add products, and companies can list them on platforms like Trendyol, Hepsiburada, N11, and others.",
            "Implemented payment processing within the system without handling shipping or logistics.",
          ]}
        />

        <Experience
          company="AldımGeldi Yazılım Sanayi Ticaret A.Ş."
          title="Intern"
          period="2021 - 2021"
          description={[
            "Gained further knowledge in e-commerce integration systems and improved myself in the backend field.",
            "Focused on DevOps and backend development skills.",
          ]}
        />

        <Experience
          company="BCA Aksesuar Plastik"
          title="Full Stack Developer"
          period="2017 - 2021"
          description={[
            "In the early stages of my career, engaged in both learning and hands-on coding within live environments.",
            "Developed an e-commerce program where suppliers can upload products from XML files to platforms like Trendyol, Hepsiburada, N11, Çiçeksepeti, etc.",
            "Implemented shipping barcode generation and inventory management features.",
          ]}
        />
      </VStack>

      <Divider my={10} />

      <Heading as="h2" size="xl" mb={10}>
        Education
      </Heading>

      <VStack spacing={6} align="stretch" mb={8}>
        <Education
          institution="Istanbul Medipol University"
          degree="Computer Programming"
          period="2020 - 2022"
        />
        <Education
          institution="Çengelköy Şehit Okan Altıparmak Anadolu Lisesi"
          degree="Database Programming"
          period="2017 - 2020"
        />
      </VStack>
    </Box>
  );
}
