import { Route, Routes } from "react-router-dom";
import CreateGame from "../pages/CreateGame";
import Overview from "../pages/Overview";
import ShowAllGames from "../pages/ShowAllGames";
import UpdateGame from "../pages/UpdateGame";
// import ContentArea from "./ContentArea";

const DisplayArea = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/create-game" element={<CreateGame />} />
      <Route path="/show-all-games" element={<ShowAllGames />} />
      <Route path="/update-game" element={<UpdateGame />} />
      {/* <Route path="/create" element={<CreateGame />} /> */}
    </Routes>
  );
};
export default DisplayArea;
