

import React, { useState, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import CharContext from "./CharContext";

export function AppleCardsCarouselDemo() {
  const [characters, setCharacters] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const json = await response.json();
        const results = json.results;
        const formattedData = results.map((char) => ({
          category: `${char.species} - ${char.status}`,
          title: char.name,
          src: char.image,
          content: <CharContext character={char} direction="row" />, // <- full data passed here
        }));

        setCharacters(formattedData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch characters:", err);
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading characters...</p>;
  }

  const displayedCharacters = showAll ? characters : characters.slice(0, 8);

  const cards = displayedCharacters.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 pt-[6rem]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know The Character.
      </h2>

      <Carousel items={cards} columns={5} />


    </div>
  );
}