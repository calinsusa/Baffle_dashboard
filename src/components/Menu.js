import MenuStyle from "../css-modules/Menu.module.css";
import { Button, Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
// import { GiGamepad } from "react-icons/gi";

const Menu = () => {
  // const buttons = ["Overview", "Create Game", "Show All Games"];
  const buttons = [
    {
      name: "Overview",

      path: "/",
    },
    {
      name: "Create Game",

      path: "/create-game",
    },
    {
      name: "Show All Games",

      path: "/show-all-games",
    },
    {
      name: "Analytics",

      path: "/show-all-games",
    },
  ];

  return (
    <Box p="5" boxShadow="base" bg="blue.900" overflow="hidden">
      <Stack direction="column" spacing={4}>
        {buttons.map((buton, index) => (
          <Link to={buton.path} key={index}>
            <Button
              className={MenuStyle.button}
              px={6}
              rounded="4"
              py={2}
              textColor="white"
              bg="blue.700"
              transition="all 0.2s"
              // borderWidth="1px"
              _hover={{ bg: "blue.600" }}
              // _expanded={{ bg: "blue.800" }}
              // _focus={{ boxShadow: "outline" }}

              borderRadius="sm"
              key={buton.index}
            >
              {buton.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Menu;
