import { useState } from "react";
import {
  createGame,
  getAllGamesAddresses,
} from "../blockchain-connect/lotteryConnect";

import {
  Text,
  Button,
  Box,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
const { ethers } = require("ethers");

const CreateGameForm = () => {
  const [ticketPrice, setTicketPricee] = useState(0);
  const [gameInterval, setGameInterval] = useState(0);
  const [gameName, setGameName] = useState("");
  const [gameCategory, setGameCategory] = useState("");

  return (
    <Box w="100%" p={10} display="flex" flexDirection="column" gap={5}>
      <Input
        type="text"
        value={gameName}
        onChange={(e) => {
          setGameName(e.target.value);
          console.log(gameName);
        }}
        placeholder="Game name"
      />
      <Select
        placeholder="Select Category"
        onChange={(e) => {
          setGameCategory(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="Electronics">Electronics</option>
        <option value="Cars">Cars</option>
        <option value="Motorbikes">Motorbikes</option>
        <option value="Gold">Gold</option>
        <option value="Experiences">Experiences</option>
        <option value="Houses">Houses</option>
      </Select>
      <Select
        placeholder="Select Game Interval"
        onChange={(e) => {
          setGameInterval(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value={604800}>7 zile</option>
        <option value={2592000}>30 zile</option>
        <option value={5184000}>60 zile</option>
        <option value={7776000}>90 zile</option>
        <option value={31536000}>365 zile</option>
      </Select>
      <Input
        type="number"
        value={ticketPrice}
        onChange={(e) => {
          setTicketPricee(e.target.value);
          console.log(ticketPrice);
        }}
        placeholder="Game name"
      />

      {/* <NumberInput
        clampValueOnBlur={false}
        min={0}
        defaultValue={0}
        precision={1}
        step={0.1}
        value={ticketPrice}
        onChange={(e, value) => {
          setTicketPricee(value);
          const x = ethers.utils.parseUnits(value, 18);
          console.log(x);
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput> */}
      <Button
        size="md"
        px={4}
        py={2}
        bg="blue.900"
        color="white"
        transition="all 0.2s"
        borderRadius="md"
        _hover={{ bg: "blue.700" }}
        onClick={() =>
          createGame(gameName, gameCategory, gameInterval, ticketPrice)
        }
      >
        Create Game
      </Button>
      <Button onClick={() => getAllGamesAddresses()}>Get All Games</Button>
    </Box>
  );
};

export default CreateGameForm;
