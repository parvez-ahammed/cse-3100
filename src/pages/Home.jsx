
import { useSearchParams } from 'react-router-dom';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/searchBar';
import FilterDropdown from '../components/FilterDropdown';

// Colorful and vibrant home page design
const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const status = searchParams.get('status') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const { data, loading, error } = useFetchCharacters(name, status, page);

  const handleNext = () => {
    if (data?.info?.next) {
      setSearchParams({ ...Object.fromEntries(searchParams), page: page + 1 });
    }
  };

  const handlePrev = () => {
    if (data?.info?.prev) {
      setSearchParams({ ...Object.fromEntries(searchParams), page: page - 1 });
    }
  };

  return (
    <main className="min-h-screen p-6 bg-midnight-black text-golden-rod font-poppins">
      <h1 className="text-4xl font-extrabold mb-6 text-sunset-orange tracking-wide">Ricky &amp; Morty Multiverse</h1>
      <section className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <FilterDropdown searchParams={searchParams} setSearchParams={setSearchParams} />
      </section>
      {loading && (
        <div role="status" aria-live="polite" aria-busy="true" className="text-electric-cyan text-lg">
          <div />
          <span>Loading characters...</span>
        </div>
      )}
      {error && <p className="text-coral-pink font-semibold">{error}</p>}
      {data?.results && (
        <>
          <section className="grid grid-cols-4 gap-6 mb-6">
            {data.results.slice(0, 12).map(character => (
              <div key={character.id}>
                <CharacterCard character={character} />
              </div>
            ))}
          </section>
          <nav aria-label="Pagination" className="flex justify-center items-center gap-4 mb-6">
            <button
              onClick={handlePrev}
              disabled={!data.info.prev}
              className="px-4 py-2 bg-ocean-blue text-midnight-black font-semibold rounded hover:bg-mint-green disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            <span className="text-midnight-black font-semibold">
              Page {page} / {data.info.pages}
            </span>
            <button
              onClick={handleNext}
              disabled={!data.info.next}
              className="px-4 py-2 bg-ocean-blue text-midnight-black font-semibold rounded hover:bg-mint-green disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </nav>
        </>
      )}
      <footer className="text-center text-soft-lavender text-sm">
        <p>
          Powered by{' '}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-cyan hover:text-coral-pink transition"
          >
            Rick and Morty API
          </a>
        </p>
       
      </footer>
    </main>
  );
};

export default HomePage;
