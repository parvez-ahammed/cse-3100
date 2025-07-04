import CharacterList from "../features/CharacterList";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>
      <h2 className="mb-4">Explore the Multiverses of Rick & Morty</h2>
      <CharacterList />
    </main>
  );
}