import { Heading } from "@chakra-ui/react";

export default function SectionHeading({ title }) {
  return (
    <Heading
      as="h2"
      size="2xl"
      fontWeight="bold"
      color="brand.700"
      mb={6}
      fontFamily="heading"
    >
      {title}
    </Heading>
  );
}