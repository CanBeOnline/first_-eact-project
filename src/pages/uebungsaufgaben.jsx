import { useState } from "react";
import FileInput from "../components/FileInput.jsx";
import FocusInput from "../components/FocusInput.jsx";
import ClickButton from "../components/ClickButton.jsx";
import Counter from "../components/Counter.jsx";
import Container from "../components/container.jsx";
import Login from "../components/loginform.jsx"
import Expression from "../components/expressions.jsx";
import ValidatedForm from "../components/validatedform.jsx";
import vocabulary from "../data/vocabulary.json";
import VocabularyGame from "../components/VocabularyGame.jsx";
import ItunesDisplay from "../components/ItunesDisplay.jsx";
import searchItunes from "../api/searchItunes.mjs";
import LikeButton from "../components/LikeButton.jsx";



        export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itunesData, setItunesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(event) {
    event.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await searchItunes(term);
      console.log("API zurückgegeben:", result);
      setItunesData(result);
    } catch (err) {
      console.error("Fehler beim Suchen:", err);
      setError("Es ist ein Fehler bei der Suche aufgetreten.");
    } finally {
      setIsLoading(false);
    }
  }

      return (


        <main className="font-poppins text-sky-900 bg-white min-h-screen w-full pt-[70px] md:pt-[85px]">
            <Container>
                <div className="flex flex-col items-center gap-8">
                    <Counter />
                    <FileInput />
                    <FocusInput />
                    <ClickButton />
                    <Login />
                    <Expression />
                    <ValidatedForm />
                    <VocabularyGame vocabulary={vocabulary} />
                    <LikeButton />
                    <ItunesDisplay />
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">iTunes Suche</h2>

                        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                            <input
                                type="text"
                                className="border rounded px-2 py-1 flex-1"
                                placeholder="Künstler oder Song suchen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-sky-600 text-white px-4 py-1 rounded"
                            >
                                Suchen
                            </button>
                        </form>

                        {isLoading && <p>Suche läuft...</p>}
                        {error && <p className="text-red-600">{error}</p>}

                        {itunesData && itunesData.results && (
                            <ul className="list-disc list-inside space-y-1">
                                {itunesData.results.slice(0, 5).map((item) => (
                                    <li key={item.trackId ?? item.collectionId}>
                                        {item.artistName} – {item.trackName ?? item.collectionName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            </Container>

        </main>

    );
}
