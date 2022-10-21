import HeaderStyle from "../css-modules/Header.module.css";
import { Button, Stack, Box } from "@chakra-ui/react";
const { ethers } = require("ethers");
const { useState } = require("react");
const Header = () => {
  const [address, setAddress] = useState("");

  const signUp = async () => {
    if (!window.ethereum) return console.log("no metamask");
    console.log("Metamask exist");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAddress(accounts);
    console.log(accounts);
  };

  return (
    <Box
      boxShadow="base"
      rounded="sm"
      bg="white"
      p={5}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      w="100%"
      h="70"
    >
      <Box display="flex" flexDirection="column" w="40%">
        <Box fontWeight="bold">BS DASHBOARD</Box>
        <Box textColor="blackAlpha.400">Wallet - {address}</Box>
      </Box>
      <Box display="flex" w="30%"></Box>
      <Box display="flex" justifyContent="flex-end" w="30%">
        <Button
          onClick={signUp}
          px={4}
          py={2}
          textColor="white"
          bg="blue.900"
          transition="all 0.2s"
          _hover={{ bg: "blue.700" }}
          // _expanded={{ bg: "gray.100" }}
          // _focus={{ boxShadow: "outline" }}

          borderRadius="md"
        >
          Connect Wallet
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
