import React,{useEffect,useState} from "react";

const CharContext = ({ character }) => {
  const [episodeNames, setEpisodeNames] = useState([]);

  useEffect(() => {
    const fetchEpisodeNames = async () => {
      if (Array.isArray(character.episode)) {
        try {
          const results = await Promise.all(
            character.episode.map(async (url) => {
              const response = await fetch(url);
              return await response.json();
            })
          );
          setEpisodeNames(results);
        } catch (error) {
          console.error('Error fetching status names:', error);
          setEpisodeNames(['Error loading status']);
        }
      } else {
        setEpisodeNames([character.episode]); 
      }
    };

    fetchEpisodeNames();
  }, [character.episode]);

 //console.log(content);
    return (
    <div className="text-neutral-700 dark:text-neutral-200 font-sans p-4 space-y-2">
      <div className="flex justify-around">
      <div className="gap-2 flex flex-col justify-around">
      <div className="flex flex-row justify-between">
        <span className="font-semibold">Name:</span>
        <span>{character.name}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="font-semibold">Status:</span>
        <span>{character.status}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="font-semibold">Origin:</span>
        <span>{character.origin?.name || "Unknown"}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="font-semibold">Location:</span>
        <span>{character.location?.name || "Unknown"}</span>
      </div>  
      </div>
       <div >
        <img src={character.image} alt="" />
      </div>
      </div>
     <div className=" mb-3">
      <div className="font-semibold mb-1">Episode:</div>
      <div className="flex flex-col gap-1">
        {episodeNames.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm ">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="border px-4 py-2 text-left">#</th>
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Episode</th>
                <th className="border px-4 py-2 text-left">Air DAate</th>
              </tr>
            </thead>
            <tbody>
              {episodeNames.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 hover:text-black">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.episode}</td>
                  <td className="border px-4 py-2">
                    {item.created
                      ? new Date(item.air_date).toLocaleDateString()
                      : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CharContext;
