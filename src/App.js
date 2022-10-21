// import Teste from "./components/Teste";
import ContentArea from "./components/ContentArea";
import Menu from "./components/Menu";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="main-container">
        <Menu />
        <ContentArea />
      </div>
    </ChakraProvider>
  );
}

export default App;
