import ContentAreaStyle from "../css-modules/ContentArea.module.css";
import Header from "./Header";
import DisplayArea from "./DisplayArea";
import { Box } from "@chakra-ui/react";

const ContentArea = () => {
  return (
    <Box bg="blackAlpha.100" className={ContentAreaStyle.container}>
      <Header />
      <DisplayArea />
    </Box>
  );
};

export default ContentArea;
