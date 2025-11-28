import { Box } from "@chakra-ui/react";

export default function Container({ children, maxW = "6xl", py = 12, px = 4 }) {
  return (
    <Box maxW={maxW} mx="auto" px={px} py={py}>
      {children}
    </Box>
  );
}