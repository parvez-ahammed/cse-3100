import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      textAlign="center"
      cursor="pointer"
      transition="all 0.2s ease"
      _hover={{ transform: "scale(1.05)" }} 
      w="220px"           
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <Image
        src={character.image}
        alt={character.name}
        w="100%"
        h="220px"          
        objectFit="cover"
        borderRadius="lg"
        bg="black"
        m="8px"
      />
      <Text fontWeight="bold" fontSize="md" mt={3}>
        {character.name}
      </Text>
      <Text fontSize="sm" color="gray.500"> 
        {character.status} • {character.species}
      </Text>
    </Box>
  );
}
