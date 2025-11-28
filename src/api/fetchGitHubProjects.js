export async function fetchGitHubProjects(username) {
    if (!username) {
        throw new Error("Es wurde kein GitHub Benutzername übergeben.");
    }

    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Github API Fehler: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Sicherstellen, dass wir ein Array zurückgeben
        if (!Array.isArray(data)) {
            console.warn("API hat kein Array zurückgegeben:", data);
            return [];
        }

        return data;
    } catch (error) {
        console.error("Fehler beim Abrufen der GitHub Repositories:", error);
        throw error;
    }
}