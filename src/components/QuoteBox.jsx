import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Spinner,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

const API_URL = import.meta.env.VITE_QUOTE_API_URL;

export default function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const quoteFontSize = useBreakpointValue({
    base: "base",
    md: "lg",
    lg: "xl",
  });

  const quoteMarkSize = useBreakpointValue({
    base: "4xl",
    md: "5xl",
    lg: "6xl",
  });

  const quoteMarkWidth = useBreakpointValue({
    base: "8",
    md: "10",
    lg: "12",
  });

  const padding = useBreakpointValue({
    base: "6",
    md: "8",
    lg: "10",
  });

  async function fetchQuote() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Fehler beim Laden des Zitats");
      }

      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (err) {
      setError(err.message || "Unbekannter Fehler");
      // Fallback-Zitat bei Fehler
      setQuote("Code ist wie Humor. Wenn du es erklären musst, ist es schlecht.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Box w="full" maxW="2xl" mx="auto" textAlign="center">
      <Card
        bg="whiteAlpha.950"
        backdropFilter="blur(10px)"
        borderRadius="2xl"
        p={padding}
        boxShadow="lg"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <CardBody>
          {loading ? (
            <Flex align="center" justify="center" py={8}>
              <Spinner size="sm" color="brand.500" mr={3} />
              <Text color="gray.600" fontFamily="body">
                Lade Zitat...
              </Text>
            </Flex>
          ) : error ? (
            <Box textAlign="center" py={4}>
              <Text color="red.600" fontFamily="body">
                {error}
              </Text>
            </Box>
          ) : (
            <Flex align="center" justify="center">
              {/* Öffnende Anführungszeichen */}
              <Box
                color="brand.500"
                fontSize={quoteMarkSize}
                fontFamily="heading"
                lineHeight="none"
                w={quoteMarkWidth}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                "
              </Box>

              {/* Zitat Text */}
              <Text
                fontSize={quoteFontSize}
                fontFamily="body"
                fontStyle="italic"
                color="gray.800"
                textAlign="center"
                lineHeight="relaxed"
                flex={1}
                maxW="none"
              >
                {quote}
              </Text>

              {/* Schließende Anführungszeichen */}
              <Box
                color="brand.500"
                fontSize={quoteMarkSize}
                fontFamily="heading"
                lineHeight="none"
                w={quoteMarkWidth}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                "
              </Box>
            </Flex>
          )}
        </CardBody>
      </Card>
    </Box>
  );
}