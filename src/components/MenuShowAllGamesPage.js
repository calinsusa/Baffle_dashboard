import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuButton,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const MenuShowAllGamesPage = () => {
  return (
    <Box display="flex" gap="2" mb="5">
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg="blue.900"
          textColor="white"
          // _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.700" }}
          // _focus={{ boxShadow: "outline" }}
        >
          Filter By Status <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Open</MenuItem>
          <MenuItem>Close</MenuItem>

          <MenuItem>Paused</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg="blue.900"
          textColor="white"
          // _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "blue.700" }}
          // _focus={{ boxShadow: "outline" }}
        >
          Filter By Category <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Electronics</MenuItem>
          <MenuItem>Cars</MenuItem>
          <MenuItem>Moto</MenuItem>
          <MenuItem>Houses</MenuItem>
          <MenuItem>Gold</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuShowAllGamesPage;
