import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box mt={5} maxW="2xl" mx="auto">
      <Header />
      <Box mb={16} mt={16} ml={3}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export const getLayout = (page: React.ReactNode) => (
  <LandingLayout>{page}</LandingLayout>
);
