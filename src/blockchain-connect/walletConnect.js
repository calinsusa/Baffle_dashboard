//Wallet connect

export const walletConnect = async () => {
  if (!window.ethereum) return console.log("no metamask");
  console.log("Metamask exist");
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(accounts);
};
