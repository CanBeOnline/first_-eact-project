import { useEffect, useState } from "react";
import searchItunes from "../api/searchItunes.mjs";

export default function ItunesDisplay() {
  const [term, setTerm] = useState("The Beatles");
  const [results, setResults] = useState([]);

 
  useEffect(() => {
    async function load() {
      try {
        const data = await searchItunes(term);
        setResults(data.results);
      } catch (err) {
        console.error("Fetch-Fehler:", err);
      }
    }

    load();
  }, [term]); 

  function handleSubmit(e) {
    e.preventDefault();
    setTerm(term); 
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">
        iTunes Suche
      </h2>


      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-sky-300 rounded px-3 py-2 flex-1"
          placeholder="Gib einen Suchbegriff ein..."
        />
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
        >
          Suchen
        </button>
      </form>


      <ul className="space-y-2">
        {results.map((song) => (
          <li
            key={song.trackId}
            className="border border-sky-200 p-3 rounded shadow-sm"
          >
            <strong>{song.trackName}</strong>
            <br />
            <span className="text-sm text-gray-600">{song.artistName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}