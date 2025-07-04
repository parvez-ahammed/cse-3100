import {
  Box,
  Input,
  Select,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || 1);

  const apiPage = Math.ceil(page / 2); 
  const sliceStart = page % 2 === 0 ? 10 : 0;
  const sliceEnd = sliceStart + 10;

  const totalPages = info.count ? Math.ceil(info.count / 10) : 1;

  const inputBg = useColorModeValue("white", "gray.800");
  const inputColor = useColorModeValue("black", "white");

  useEffect(() => {
    const query = new URLSearchParams();
    if (name) query.append("name", name);
    if (status) query.append("status", status);
    query.append("page", apiPage);

    fetch(`https://rickandmortyapi.com/api/character/?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((data.results || []).slice(sliceStart, sliceEnd));
        setInfo(data.info || {});
      });
  }, [name, status, page]);

  return (
    <Box p={[4, 6]} maxW="1200px" mx="auto">
      {/* Filters */}
      <Flex gap={4} mb={6} flexWrap="wrap" align="center">
        <Select
          placeholder="Select status"
          value={status}
          onChange={(e) => setSearchParams({ name, status: e.target.value, page: 1 })}
          maxW={["100%", "200px"]}
          flexShrink={1}
          borderRadius="md"
          bg={inputBg}
          color={inputColor}
          shadow="sm"
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>

        <Input
          placeholder="Search characters"
          value={name}
          onChange={(e) => setSearchParams({ name: e.target.value, status, page: 1 })}
          maxW={["100%", "300px"]}
          flexShrink={1}
          borderRadius="md"
          bg={inputBg}
          color={inputColor}
          shadow="sm"
        />
      </Flex>

      <Text mb={3} overflowWrap="break-word" wordBreak="break-word">
        Showing {characters.length} of {info.count || 0} results
      </Text>

      {/*Character Cards*/}
      <SimpleGrid columns={[1, 2, 3, 5]} spacing={8} justifyItems="center">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </SimpleGrid>
      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={(newPage) => setSearchParams({ name, status, page: newPage })}
        name={name}
        status={status}
        setSearchParams={setSearchParams}
      />
    </Box>
  );
}
