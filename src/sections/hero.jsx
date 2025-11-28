import { Box, Flex, Heading, Text, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import Button from "../components/button";
import QuoteBox from "../components/QuoteBox";

export default function Hero() {
  const headingSize = useBreakpointValue({
    base: "4xl",
    sm: "5xl",
    md: "6xl",
    lg: "7xl",
  });

  const subtitleSize = useBreakpointValue({
    base: "lg",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
  });

  const spacing = useBreakpointValue({
    base: 6,
    md: 8,
    lg: 10,
  });

  const quoteMargin = useBreakpointValue({
    base: 8,
    md: 12,
  });

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      aria-label="Hero Section - Ibrahim Can Uyan"
    >
      {/* Hintergrundbild */}
      <Box position="absolute" inset={0} zIndex={0} aria-hidden="true">
        <Image
          src="/images/herobild.webp"
          alt=""
          w="full"
          h="full"
          objectFit="cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Starkes Overlay für optimale Lesbarkeit auf dunklem Code-Hintergrund */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, blackAlpha.850, blackAlpha.800, blackAlpha.850)"
          aria-hidden="true"
        />
        {/* Zusätzlicher gleichmäßiger Overlay für konsistente Lesbarkeit */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.600"
          aria-hidden="true"
        />
      </Box>

      {/* Content Container - Perfekt zentriert */}
      <Box
        position="relative"
        zIndex={10}
        w="full"
        maxW="6xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
      >
        <VStack
          textAlign="center"
          spacing={spacing}
          align="center"
        >
          {/* Name - Hero Headline */}
          <Heading
            as="h1"
            size={headingSize}
            fontWeight="bold"
            fontFamily="heading"
            color="white"
            lineHeight="tight"
            textShadow="2xl"
            w="full"
          >
            Ibrahim Can Uyan
          </Heading>

          {/* Untertitel */}
          <Text
            fontSize={subtitleSize}
            fontWeight="medium"
            fontFamily="body"
            color="white"
            maxW="3xl"
            mx="auto"
            textShadow="lg"
            textAlign="center"
          >
            Full-Stack-Webentwickler & Kreativer Denker
          </Text>

          {/* Quote Box - Elegante Card */}
          <Box mt={quoteMargin} w="full" display="flex" justifyContent="center">
            <QuoteBox />
          </Box>

          {/* CTA Buttons */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            justify="center"
            align="center"
            mt={quoteMargin}
            w="full"
          >
            <Button
              label="Kontaktiere mich"
              href="#contact"
              variant="primary"
            />
            <Button
              label="Meine Projekte"
              href="/projects"
              variant="secondary"
            />
          </Flex>
        </VStack>
      </Box>

      {/* Scroll Indicator - Außerhalb des zentrierten Containers, am unteren Rand */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
        animation="bounce 2s infinite"
        sx={{
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "50%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
          },
        }}
      >
        <Box
          w={6}
          h={10}
          border="2px solid"
          borderColor="whiteAlpha.500"
          borderRadius="full"
          mx="auto"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          p={2}
        >
          <Box
            w="6px"
            h="6px"
            bg="whiteAlpha.700"
            borderRadius="full"
          />
        </Box>
      </Box>
    </Box>
  );
}      