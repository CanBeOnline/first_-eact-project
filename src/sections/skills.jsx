import { Box, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";

// Kategorisierte Skills-Struktur - optimiert aus den ursprünglichen Daten
const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Vite", "Alpine.js"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Livewire", "PHP 8+"],
  },
  {
    title: "Performance & SEO",
    skills: ["SEO-Grundlagen", "Performance-Optimierung"],
  },
  {
    title: "Services & Integration",
    skills: ["Postmark", "Mailtrap", "E-Mail-Integration"],
  },
  {
    title: "Automation",
    skills: ["n8n", "AI-gestützte Workflows", "Automatisierung"],
  },
];

export default function Skills() {
  return (
    <Box as="section" py={16}>
      <SectionHeading title="Fähigkeiten" />

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        mt={6}
      >
        {skillCategories.map((category, categoryIndex) => (
          <Box key={categoryIndex}>
            {/* Kategorie-Titel */}
            <Text
              fontFamily="heading"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
              color="brand.800"
              mb={4}
            >
              {category.title}
            </Text>

            {/* Badges mit Wrap für automatisches Responsive-Verhalten */}
            <Wrap spacing={3}>
              {category.skills.map((skill, skillIndex) => (
                <WrapItem key={skillIndex}>
                  <Box
                    as="span"
                    display="inline-block"
                    px={4}
                    py={2}
                    bg="brand.100"
                    color="brand.700"
                    borderRadius="full"
                    fontSize={{ base: "sm", md: "base" }}
                    fontFamily="body"
                    fontWeight="normal"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      bg: "brand.200",
                      color: "brand.800",
                      transform: "scale(1.02)",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}