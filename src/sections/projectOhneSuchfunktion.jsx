import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import projects from "../data/projects.json";

// Funktion zum Extrahieren von Tags/Technologien aus der Beschreibung
function extractTags(description) {
  const tags = [];
  const techKeywords = {
    laravel: "Laravel",
    tailwind: "Tailwind CSS",
    "tailwindcss": "Tailwind CSS",
    "e-commerce": "E-Commerce",
    webentwicklung: "Webentwicklung",
    branding: "Branding",
    automatisierung: "Automatisierung",
  };

  const lowerDesc = description.toLowerCase();

  // Durchsuche nach Technologien
  Object.keys(techKeywords).forEach((keyword) => {
    if (lowerDesc.includes(keyword)) {
      tags.push(techKeywords[keyword]);
    }
  });

  // Entferne Duplikate
  return [...new Set(tags)];
}

export default function Projects() {
  return (
    <Box as="section" py={16}>
      <SectionHeading title="Projekte" />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
        {projects.map((project) => {
          const tags = extractTags(project.description);

          return (
            <Card
              key={project.id}
              border="1px solid"
              borderColor="brand.200"
              borderRadius="lg"
              bg="white"
              boxShadow="soft"
              transition="all 0.2s ease-in-out"
              _hover={{
                boxShadow: "medium",
                transform: "translateY(-2px)",
                borderColor: "brand.400",
              }}
            >
              <CardBody p={6}>
                {/* Projekt-Titel */}
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily="heading"
                  fontWeight="semibold"
                  color="brand.800"
                  mb={3}
                >
                  {project.title}
                </Heading>

                {/* Projekt-Beschreibung */}
                <Text
                  fontSize={{ base: "base", md: "md" }}
                  fontFamily="body"
                  color="gray.700"
                  lineHeight="relaxed"
                  mb={tags.length > 0 ? 4 : 0}
                >
                  {project.description}
                </Text>

                {/* Tags/Technologien */}
                {tags.length > 0 && (
                  <Wrap spacing={3}>
                    {tags.map((tag, index) => (
                      <WrapItem key={index}>
                        <Box
                          as="span"
                          display="inline-block"
                          px={4}
                          py={2}
                          bg="brand.100"
                          color="brand.700"
                          borderRadius="full"
                          fontSize="sm"
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
                          {tag}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                )}
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}