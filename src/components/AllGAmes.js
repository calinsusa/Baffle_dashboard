import {
  Box,
  Button,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tfoot,
  Tr,
  Td,
  Th,
  Tbody,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const AllGames = ({ games, actionButtons }) => {
  return (
    <Box p="10" boxShadow="base" bg="white" h="100%">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Game</Th>
              <Th>Game Address</Th>
              <Th>Status</Th>
              <Th> Players</Th>
              <Th>Matic Balance</Th>
              <Th>Time Data</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {games.map((game, index) => (
              <Tr key={index}>
                <Td>{game.gameName}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        size="sm"
                        rightIcon={<ChevronDownIcon />}
                        px={4}
                        py={2}
                        bg="gray.50"
                        transition="all 0.2s"
                        borderRadius="sm"
                      >
                        {game.buttonShowAddress}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Game Address</PopoverHeader>
                      <PopoverBody>
                        <Box
                          h="39"
                          w="100%"
                          fontWeight="medium"
                          display="flex"
                          alignContent="center"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          {game.address}
                          <IconButton
                            aria-label="Search database"
                            icon={<MdContentCopy />}
                          />
                        </Box>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                <Td>
                  {game.gameStatus == "Open" ? (
                    <Badge colorScheme="green">{game.gameStatus}</Badge>
                  ) : (
                    <Badge colorScheme="red">{game.gameStatus}</Badge>
                  )}
                </Td>
                <Td isNumeric>{game.players}</Td>
                <Td isNumeric>{game.gameBalance}</Td>

                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        size="sm"
                        rightIcon={<ChevronDownIcon />}
                        px={4}
                        py={2}
                        bg="gray.50"
                        fontWeight="medium"
                        transition="all 0.2s"
                        borderRadius="sm"
                      >
                        {game.butonShowTimeData}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Time</PopoverHeader>
                      <PopoverBody>
                        <TableContainer>
                          <Table variant="simple" size="sm">
                            <Thead>
                              <Tr>
                                <Th>Name</Th>
                                <Th isNumeric>Data</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>Interval</Td>
                                <Td isNumeric>{game.interval}</Td>
                              </Tr>
                              <Tr>
                                <Td>Start at</Td>
                                <Td isNumeric>{game.startAt}</Td>
                              </Tr>
                              <Tr>
                                <Td>End at</Td>
                                <Td isNumeric>{game.finishAt}</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>

                <Td>
                  <Popover>
                    {({ isOpen, onClose }) => (
                      <>
                        <PopoverTrigger>
                          <Button
                            size="sm"
                            rightIcon={<ChevronDownIcon />}
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            bg="gray.50"
                            textColor="black"
                            fontWeight="medium"
                            _hover={{ bg: "gray.100" }}
                            _expanded={{ bg: "gray.100", textColor: "black" }}
                            // _focus={{ boxShadow: "outline" }}

                            borderRadius="md"
                          >
                            {game.buttonActions}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent bg="white">
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Action</PopoverHeader>
                          <PopoverBody>
                            <Box
                              h="auto"
                              w="100%"
                              display="flex"
                              flexDirection="column"
                              gap="2"
                            >
                              {actionButtons.map((button, index) => (
                                <Link key={index} to={button.link}>
                                  <Button
                                    size="sm"
                                    w="100%"
                                    onClick={onClose}
                                    px={4}
                                    py={2}
                                    fontWeight="medium"
                                    textColor={button.textColor}
                                    bg={button.bg}
                                    transition="all 0.2s"
                                    _hover={{ bg: "blackAlpha.100" }}
                                    _expanded={{
                                      bg: "gray.100",
                                      textColor: "black",
                                    }}
                                    borderRadius="md"
                                  >
                                    {button.name}
                                  </Button>
                                </Link>
                              ))}
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </>
                    )}
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllGames;
