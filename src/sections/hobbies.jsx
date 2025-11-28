import { Box, Wrap, WrapItem, Text } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";

export default function Hobbies() {
  return (
    <Box as="section" py={16}>
      <SectionHeading title="Hobbys" />
      <Wrap spacing={4} mt={6}>
        <WrapItem>
          <Text color="gray.700">✈️ Reisen</Text>
        </WrapItem>
        <WrapItem>
          <Text color="gray.700">📷 Fotografie</Text>
        </WrapItem>
        <WrapItem>
          <Text color="gray.700">🎨 Design</Text>
        </WrapItem>
      </Wrap>
    </Box>
  );
}