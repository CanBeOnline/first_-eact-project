import { Button as ChakraButton, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Button({ label, href, variant = "primary" }) {
  const padding = useBreakpointValue({ base: "6", md: "8" });
  const fontSize = useBreakpointValue({ base: "base", md: "lg" });
  const py = useBreakpointValue({ base: "3", md: "4" });

  // Varianten-Konfiguration für Chakra UI
  const getVariantProps = () => {
    switch (variant) {
      case "primary":
        return {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "scale(1.05)",
            boxShadow: "lg",
          },
          boxShadow: "md",
        };
      case "secondary":
        return {
          bg: "whiteAlpha.200",
          backdropFilter: "blur(10px)",
          color: "white",
          border: "2px solid",
          borderColor: "whiteAlpha.500",
          _hover: {
            bg: "whiteAlpha.300",
            borderColor: "whiteAlpha.700",
            boxShadow: "lg",
          },
          boxShadow: "lg",
        };
      case "outline":
        return {
          bg: "transparent",
          border: "2px solid",
          borderColor: "white",
          color: "white",
          _hover: {
            bg: "white",
            color: "gray.900",
          },
        };
      default:
        return {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        };
    }
  };

  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");
  const ButtonComponent = isExternal ? "a" : Link;
  const linkProps = isExternal ? { href, target: "_blank", rel: "noreferrer" } : { to: href };

  return (
    <ChakraButton
      as={ButtonComponent}
      {...linkProps}
      px={padding}
      py={py}
      fontSize={fontSize}
      fontWeight="semibold"
      fontFamily="heading"
      borderRadius="lg"
      transition="all 0.3s ease-in-out"
      _focus={{
        outline: "none",
        ring: 2,
        ringColor: "white",
        ringOffset: 2,
        ringOffsetColor: "transparent",
      }}
      {...getVariantProps()}
    >
      {label}
    </ChakraButton>
  );
}