import { Box, Flex, Text, Image, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const imageSize = useBreakpointValue({ base: "200px", md: "250px", lg: "300px" });
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <Box as="section" py={16}>
      <SectionHeading title="Über mich" />
      
      <Flex
        direction={direction}
        align={{ base: "center", md: "flex-start" }}
        gap={8}
        mt={6}
      >
        {/* Profilbild */}
        <Box flexShrink={0}>
          <Image
            src="/images/profilbild.webp"
            alt="Ibrahim Can Uyan"
            borderRadius="full"
            boxSize={imageSize}
            objectFit="cover"
            boxShadow="lg"
            border="4px solid"
            borderColor="brand.100"
          />
        </Box>

        {/* Textinhalt */}
        <VStack align={textAlign === "center" ? "center" : "flex-start"} spacing={4} flex={1}>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            lineHeight="relaxed"
            textAlign={textAlign}
          >
            Ich heiße <Text as="span" fontWeight="bold" color="brand.700">Ibrahim Can Uyan</Text>. 
            Ich arbeite an meiner Zukunft als Webentwickler. Ich liebe es, Ideen in moderne, 
            performante Webseiten zu verwandeln – mit klarem Design, sauberen Strukturen und 
            Fokus auf Benutzererlebnis. Mein Ziel ist es, digitale Auftritte zu schaffen, die 
            technisch stark und visuell überzeugend sind.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}