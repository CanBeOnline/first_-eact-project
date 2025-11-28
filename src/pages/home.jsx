import { Box, Heading } from "@chakra-ui/react";
import Container from "../components/container.jsx";
import LinkList from "../components/exercise.jsx";
import HeroSection from "../sections/hero.jsx";
import AboutSection from "../sections/about.jsx";
import SkillsSection from "../sections/skills.jsx";
import ProjectSection from "../sections/projectOhneSuchfunktion.jsx";
import HobbiesSection from "../sections/hobbies.jsx";
import ContactSection from "../sections/contact.jsx";

export default function Home() {
  return (
    <Box
      as="main"
      fontFamily="heading"
      color="sky.900"
      bg="white"
      w="full"
      data-no-navbar-padding
    >
      {/* Hero Section außerhalb des Containers für Full-Screen */}
      <HeroSection />

      <Container>
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <HobbiesSection />
        <ContactSection />

        <Box as="section" mt={8}>
          <Heading as="h2" size="lg" fontWeight="semibold" mb={4}>
            Übungsaufgaben
          </Heading>
          <LinkList />
        </Box>
      </Container>
    </Box>
  );
}