import { Box } from "@chakra-ui/react";
import MenuShowAllGamesPage from "../components/MenuShowAllGamesPage";
import AllGames from "../components/AllGAmes";

const ShowAllGames = () => {
  const actionButtons = [
    {
      name: "Update Game",
      link: "/update-game",
      bg: "gray.50",
    },
    {
      name: "Stop Game",
      link: "",
      bg: "gray.50",
    },
    {
      name: "Start Game",
      link: "",
      bg: "gray.50",
    },
    {
      name: "Open Game",
      link: "",
      bg: "gray.50",
    },
    {
      name: "Delete Game",
      link: "",
      bg: "red.500",
      textColor: "white",
    },
  ];
  const games = [
    {
      gameName: "Mercedes",
      gameStatus: "Open",
      gameBalance: 100.045 + " MATIC",
      players: 23.567,
      interval: 30,
      startAt: 0,
      finishAt: 0,
      endIn: 0,
      buttonActions: "Action",
      buttonD: "Delete",
      address: "0x000000000000000000",
      buttonShowAddress: "Address",
      butonShowTimeData: "Time Data",
    },
    {
      gameName: "Toyota",
      gameStatus: "Open",
      gameBalance: 134.093 + " MATIC",
      players: 120.345,
      interval: 30,
      startAt: 0,
      finishAt: 0,
      endIn: 0,
      buttonActions: "Action",
      buttonD: "Delete",
      address: "0x000000000000000000",
      buttonShowAddress: "Address",
      butonShowTimeData: "Time Data",
    },
    {
      gameName: "IPhone 14",
      gameStatus: "Close",
      gameBalance: 0 + " MATIC",
      players: 0,
      interval: 7,
      startAt: 0,
      finishAt: 0,
      endIn: 0,
      buttonActions: "Action",
      buttonD: "Delete",
      address: "0x000000000000000000",
      buttonShowAddress: "Address",
      butonShowTimeData: "Time Data",
    },
  ];
  return (
    <Box mt="5" h="80%">
      <MenuShowAllGamesPage />
      <AllGames games={games} actionButtons={actionButtons} />
    </Box>
  );
};

export default ShowAllGames;
