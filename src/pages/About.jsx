import { Box, Heading, Text, Container } from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="container.md" p={4} mt={[6, 10, 16]}>
      <Heading as="h1" size="lg" mb={4}>
        About Rick & Morty Explorer
      </Heading>
      <Text mb={4}>
        Rick & Morty Explorer is a fan-made website built for fans of the iconic animated series, Rick and Morty. This app acts as a detailed resource, providing insights into the show’s expansive world, including its unique characters, exotic locations, and thrilling episodes. Whether you're a seasoned viewer or just starting out, this app offers a fun and immersive way to dive into the wild adventures of Rick and Morty.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        Developer
      </Heading>
      <Text mb={4}>
        Rick & Morty Explorer was brought to life by the avid admirers of the series. With experience in software development and a love for the show’s quirky humor and innovative storytelling, we designed this app to connect with the passionate fanbase. It stands as a celebration of the lively Rick and Morty community and a nod to its creative legacy.
      </Text>
      <Heading as="h2" size="md" mb={2}>
        Favorite Quote
      </Heading>
      <Text mb={4}>
        "Existence is an adventure worth taking risks for, or you’re just cosmic dust floating aimlessly!"
      </Text>
      <Text fontSize="sm" color="gray.500">
        This application is not affiliated with or endorsed by the creators of Rick and Morty. It is a fan-made endeavor created purely for enjoyment and educational purposes.
      </Text>
    </Container>
  );
}
