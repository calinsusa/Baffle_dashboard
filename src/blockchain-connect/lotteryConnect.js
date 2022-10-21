import lotteryABI from "../utils/lotteryABI";
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
const lotteryAddress = "0x6c5778F22D1B4F5CAAe4de60a8BA68dd342D4856";
const _signer = provider.getSigner();
const contract = new ethers.Contract(lotteryAddress, lotteryABI, _signer);

export const createGame = async (
  _gameName,
  _gameCategory,
  _gameInterval,
  _ticketPrice
) => {
  await contract.createGame(
    _gameName,
    _gameCategory,
    _gameInterval,
    ethers.utils.parseUnits(_ticketPrice, 18)
  );
  console.log("Game created " + _gameName);
};

export const getAllGamesAddresses = async () => {
  const addresses = await contract.getAllGames();
  console.log(addresses);
};
