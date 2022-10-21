import CreateGameStyle from "../css-modules/CreateGame.module.css";
import CreateGameForm from "../components/CreateGameForm";
import CreateGameAddPhotos from "../components/CreateGameAddPhotos";
import { Box } from "@chakra-ui/react";
const CreateGame = () => {
  return (
    <Box display="flex">
      <CreateGameForm />
      <CreateGameAddPhotos />
    </Box>
  );
};

export default CreateGame;
