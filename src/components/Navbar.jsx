import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  useColorMode,
  HStack,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box boxShadow="md" bg={colorMode === "light" ? "white" : "gray.800"}>
      <Container maxW="1140px" px={4}>
        <Flex h="60px" alignItems="center" justifyContent="space-between">
          <Text fontSize="20px" fontWeight="bold">
            <Link to="/">
              Rick & Morty Explorer
            </Link>
          </Text>

          <Spacer />

          <HStack spacing={4}>
            <ChakraLink as={Link} to="/" fontWeight="medium">
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/about" fontWeight="medium">
              About Us
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" fontWeight="medium">
              Contact
            </ChakraLink>
            <Button onClick={toggleColorMode} size="sm">
              {colorMode === "light" ? <IoMoon /> : <LuSun />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
