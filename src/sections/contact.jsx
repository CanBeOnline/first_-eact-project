import { Box, Text } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/button";

export default function Contact() {
  return (
    <Box as="section" id="contact" py={16} textAlign="center">
      <SectionHeading title="Kontakt" />
      <Text color="gray.700" mb={6}>
        Du möchtest mit mir arbeiten oder einfach Hallo sagen?
      </Text>
      <Button label="Schreib mir eine E-Mail" href="mailto:info@canbeonline.com" />
    </Box>
  );
}