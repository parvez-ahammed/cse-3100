import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Spinner,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const headingColor = useColorModeValue("gray.800", "gray.100");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) {
    return (
      <Center minH="300px">
        <Spinner size="xl" thickness="4px" color="teal.500" />
      </Center>
    );
  }

  return (
    <Box p={6} maxW="800px" mx="auto" borderRadius="md">
      <VStack spacing={6} align="center">
        <Heading as="h1" size="lg" color={headingColor}>
          {character.name}
        </Heading>
        <Image
          src={character.image}
          alt={character.name}
          borderRadius="md"
          boxSize="400px"
          objectFit="contain"
          p={4}
        />
        <SimpleGrid columns={2} spacing={8} w="full" textAlign="center">
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="bold">
              Status
            </Text>
            <Text>{character.status}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="bold">
              Species
            </Text>
            <Text>{character.species}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="bold">
              Origin
            </Text>
            <Text>{character.origin?.name || "Unknown"}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="bold">
              Last known location
            </Text>
            <Text>{character.location?.name || "Unknown"}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray.600" fontWeight="bold">
              Number of episodes
            </Text>
            <Text>{character.episode?.length || 0}</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
