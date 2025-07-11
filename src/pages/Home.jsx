import CharacterCard from "../components/CharacterCard";
import FetchCharacter from "../hooks/FetchCharacter";
import SearchBox from "../components/SearchBox";
import StatusFilter from "../components/StatusFilter";

export default function Home() {
  const { characters } = FetchCharacter();

  return (
    <main className="container flex flex-col items-center">
      <div className="my-4 text-3xl">Rick & Morty Explorer</div>

      <div className="w-100">
        <SearchBox />
        <StatusFilter />
      </div>

      <div className="row">
        {characters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
