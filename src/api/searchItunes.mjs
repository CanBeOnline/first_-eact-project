export default async function searchItunes(term) {
  const encodedTerm = encodeURIComponent(term);
  const url = `https://itunes.apple.com/search?term=${encodedTerm}&limit=5`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP-Fehler: ${res.status}`);
    }

    const data = await res.json();
    console.log("iTunes Ergebnis für:", term, data);

    return data;
  } catch (error) {
    console.error("Fehler beim iTunes-Fetch:", error);
    return null;
  }
}