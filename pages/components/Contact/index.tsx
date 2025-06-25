import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
  Text,
  Flex,
  Icon,
  HStack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  value: string;
  link?: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contact@bedirhan.dev",
      link: "mailto:contact@bedirhan.dev",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      value: "@bedirhansamsa",
      link: "https://twitter.com/bedirhansamsa",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "BEDIRHANSAMSA",
      link: "https://github.com/BEDIRHANSAMSA",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Here you would normally handle the form submission to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 1500);
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box as="section" id="contact" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          Get in Touch
        </Heading>
        <Text fontSize="lg" maxW="3xl" color="text.secondary">
          Have a project in mind or want to discuss potential collaborations?
          Feel free to reach out to me using the form below or through my social
          media.
        </Text>
      </MotionBox>

      <Flex direction={{ base: "column", md: "row" }} gap={8} mt={10}>
        <MotionBox
          flex="1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack
            as="form"
            spacing={6}
            p={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            align="flex-start"
            onSubmit={handleSubmit}
          >
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                borderColor={borderColor}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                borderColor={borderColor}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                borderColor={borderColor}
                rows={5}
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Sending..."
              alignSelf="flex-end"
            >
              Send Message
            </Button>
          </VStack>
        </MotionBox>

        <MotionBox
          flex="1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            p={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            height="100%"
          >
            <Heading as="h3" size="md" mb={6}>
              Contact Information
            </Heading>
            <VStack spacing={6} align="flex-start">
              {contactInfo.map((info, idx) => (
                <MotionBox
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  width="100%"
                >
                  <HStack spacing={4}>
                    <Flex
                      align="center"
                      justify="center"
                      borderRadius="full"
                      bg={useColorModeValue("brand.50", "brand.900")}
                      color="brand.500"
                      w={10}
                      h={10}
                    >
                      <Icon as={() => info.icon} boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="bold">{info.title}</Text>
                      <Text
                        as="a"
                        href={info.link}
                        color="brand.500"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {info.value}
                      </Text>
                    </Box>
                  </HStack>
                </MotionBox>
              ))}

              <Text mt={8} color="text.secondary">
                I'm currently available for freelance work and full-time
                positions. If you're interested in working together, don't
                hesitate to reach out!
              </Text>
            </VStack>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}
