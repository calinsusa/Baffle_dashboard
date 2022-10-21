import lotteryABI from "../utils/lotteryABI";
import gameABI from "../utils/gameABI";
import { Box, Button } from "@chakra-ui/react";
const { ethers } = require("ethers");
const { useState } = require("react");

const Teste = () => {
  const INFURA_KEY = process.env.REACT_APP_INFURA_GOERLI;
  // const INFURA_TEST_NET = process.env.INFURA_GOERLI;
  // const provider = new ethers.providers.JsonRpcProvider(INFURA_KEY);
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  // const address = "0x04E65bd37e919136f68C505c8b2Eb44ABbc14896";
  const address = "0x6c5778F22D1B4F5CAAe4de60a8BA68dd342D4856";

  //   const gameAbi = ["function getInterval () external view returns(uint) "];
  const gameAddress = "0x702F69E725F8BBd958733477f31B73f23401eAbB";

  const [balance, setBalance] = useState();
  const [gameName, setGameName] = useState("");
  const [gameInterval, setGameInterval] = useState(0);

  const getBalance = async () => {
    const data = await provider.getBalance(
      "0x8981e8CF4596BbdE4626414D93C05B3FaD5eCCCc"
    );
    setBalance(ethers.utils.formatEther(data).toString());
    console.log(ethers.utils.formatEther(data).toString());
  };

  const createGame = async () => {
    // const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"
    );
    const _signer = _provider.getSigner(); // get the connected account

    // const _signer = _provider.getSigner(); // get the connected account
    // const contract = new ethers.Contract(address, abi, _signer);
    const contract = new ethers.Contract(address, lotteryABI, _signer);
    await contract.createGame(gameName, gameInterval);
    console.log("Game created " + gameName);
  };

  const getGames = async () => {
    // const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"
    );
    const _signer = _provider.getSigner(); // get the connected account

    // const _signer = _provider.getSigner(); // get the connected account
    // const contract = new ethers.Contract(address, abi, _signer);
    const contract = new ethers.Contract(address, lotteryABI, _signer);
    const gamesAddress = await contract.getAllGames();
    console.log(gamesAddress);
  };

  // const getGameInterval = async () => {
  //   const _provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const _signer = _provider.getSigner(); // get the connected account
  //   const contract = new ethers.Contract(gameAddress, abi, _signer);
  //   const interval = await contract.getInterval();
  //   console.log(interval.toString());
  // };

  const getGameInterval = async () => {
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"
    );
    const _signer = _provider.getSigner(); // get the connected account
    const contract = new ethers.Contract(gameAddress, gameABI, _signer);
    const interval = await contract.getInterval();
    console.log(interval.toString());
  };

  const setTiketPrice = async () => {
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"
    );
    const _signer = _provider.getSigner(); // get the connected account
    const contract = new ethers.Contract(gameAddress, gameABI, _signer);
    console.log(1);
    await contract.setTicketPrice(400);
  };

  const gameData = async () => {
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"
    );
    const _signer = _provider.getSigner();
    const contract = new ethers.Contract(gameAddress, gameABI, _signer);
    const data = await contract.getGameData();
    // console.log(ethers.utils.formatEther(data.ticketPrice));
    console.log(data);
  };

  const getGameAddress = async () => {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const _signer = _provider.getSigner(); // get the connected account
    const contract = new ethers.Contract(gameAddress, gameABI, _signer);
    const address = await contract.getGameAddress();
    console.log(address.toString());
  };

  const signUp = async () => {
    if (!window.ethereum) return console.log("no metamask");
    console.log("Metamask exist");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
  };

  // useEffect(() => {
  //   setBalance(
  //     provider.getBalance("0x8981e8CF4596BbdE4626414D93C05B3FaD5eCCCc")
  //   );
  //   return () => {};
  // }, []);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <p>Balance</p>
      <p>{balance}</p>
      <Box display="flex" gap="4">
        <Button
          size="md"
          px={4}
          py={2}
          bg="blue"
          color="white"
          transition="all 0.2s"
          borderRadius="md"
          onClick={getBalance}
        >
          Get Balace
        </Button>
        <Button
          size="md"
          px={4}
          py={2}
          bg="blue"
          color="white"
          transition="all 0.2s"
          borderRadius="md"
          onClick={getGames}
        >
          Get Games
        </Button>
        <Button
          size="md"
          px={4}
          py={2}
          bg="blue"
          color="white"
          transition="all 0.2s"
          borderRadius="md"
          onClick={gameData}
        >
          Get Game Data
        </Button>
      </Box>
      <button onClick={signUp}>Connect</button>
      <button onClick={setTiketPrice}>SET TIKET PRICE</button>

      <button onClick={getGameInterval}>GameInterval</button>
      <button onClick={getGameAddress}>GameAddress</button>
      <button onClick={createGame}>Create Game</button>

      <form>
        <label>Create game</label>
        <input
          type="text"
          required
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />

        <label>Interval</label>
        <input
          type="number"
          required
          value={gameInterval}
          onChange={(e) => setGameInterval(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Teste;
