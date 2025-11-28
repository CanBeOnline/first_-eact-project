import { useState, useEffect } from "react";
import { fetchGitHubProjects } from "../api/fetchGitHubProjects.js";
import {
    Box,
    Card,
    CardBody,
    Stack,
    Text,
    Heading,
    SimpleGrid,
    Badge,
    Link,
    Spinner,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";

// Lookup-Funktion für Programmiersprachen-Farben
function getLanguageColor(language) {
    const colorMap = {
        JavaScript: "yellow",
        TypeScript: "blue",
        Python: "green",
        Java: "orange",
        "C++": "pink",
        C: "gray",
        "C#": "purple",
        PHP: "cyan",
        Ruby: "red",
        Go: "teal",
        Rust: "orange",
        Swift: "orange",
        Kotlin: "purple",
        Dart: "blue",
        HTML: "orange",
        CSS: "blue",
        SCSS: "pink",
        Vue: "green",
        React: "cyan",
        Angular: "red",
        Shell: "gray",
        Dockerfile: "blue",
        Makefile: "gray",
        null: "gray",
    };

    return colorMap[language] || "gray";
}

export default function GitHubProjects({ username }) {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadRepositories() {
            try {
                setLoading(true);
                setError(null);

                console.log("Lade Repositories für:", username);
                const repos = await fetchGitHubProjects(username);
                console.log("Geladene Repositories:", repos);

                setRepositories(repos || []);
            } catch (err) {
                console.error("Fehler beim Laden der Repositories:", err);
                setError(err.message || "Unbekannter Fehler beim Laden.");
            } finally {
                setLoading(false);
            }
        }

        if (username) {
            loadRepositories();
        } else {
            setLoading(false);
            setError("Kein Benutzername angegeben.");
        }
    }, [username]);

    if (loading) {
        return (
            <Box mt={8}>
                <Heading as="h2" size="lg" mb={4}>
                    GitHub Projekte
                </Heading>
                <Stack direction="row" spacing={4} align="center">
                    <Spinner />
                    <Text>Repositories werden geladen …</Text>
                </Stack>
            </Box>
        );
    }

    if (error) {
        return (
            <Box mt={8}>
                <Heading as="h2" size="lg" mb={4}>
                    GitHub Projekte
                </Heading>
                <Alert status="error">
                    <AlertIcon />
                    <Text>Fehler beim Laden: {error}</Text>
                </Alert>
            </Box>
        );
    }

    return (
        <Box mt={8}>
            <Heading as="h2" size="lg" mb={4}>
                GitHub Projekte
            </Heading>

            {repositories.length === 0 ? (
                <Text>Keine Repositories gefunden.</Text>
            ) : (
                <SimpleGrid minChildWidth="300px" spacing={4}>
                    {/* 
                        Hinweis: Die For Komponente von Chakra UI ist in v2 nicht verfügbar.
                        Wir verwenden hier map() als Alternative. Falls die For Komponente
                        in einer neueren Version verfügbar ist, kann sie hier verwendet werden.
                    */}
                    {repositories.map((repo) => (
                        <Card key={repo.id}>
                            <CardBody>
                                <Stack spacing={3}>
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        color="blue.500"
                                        _hover={{ color: "blue.700" }}
                                    >
                                        <Heading as="h3" size="md">
                                            {repo.name}
                                        </Heading>
                                    </Link>
                                    {repo.description && (
                                        <Text fontSize="sm" color="gray.600">
                                            {repo.description}
                                        </Text>
                                    )}
                                    {repo.language && (
                                        <Badge
                                            colorScheme={getLanguageColor(repo.language)}
                                            alignSelf="flex-start"
                                        >
                                            {repo.language}
                                        </Badge>
                                    )}
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
}