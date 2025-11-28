import { List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function LinkList() {
  return (
    <List spacing={2}>
      <ListItem>
        <Link as={RouterLink} to="/" color="blue.500" _hover={{ color: "blue.700" }}>
          Home
        </Link>
      </ListItem>
      <ListItem>
        <Link as={RouterLink} to="/about" color="blue.500" _hover={{ color: "blue.700" }}>
          Über mich
        </Link>
      </ListItem>
      <ListItem>
        <Link as={RouterLink} to="/projects" color="blue.500" _hover={{ color: "blue.700" }}>
          Projekte
        </Link>
      </ListItem>
      <ListItem>
        <Link as={RouterLink} to="/contact" color="blue.500" _hover={{ color: "blue.700" }}>
          Kontakt
        </Link>
      </ListItem>
    </List>
  );
}