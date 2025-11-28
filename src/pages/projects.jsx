import Container from "../components/container.jsx";
import ProjectsSection from "../sections/project.jsx";
import GitHubProjects from "../components/GitHubProjects.jsx";

export default function Projects() {
  return (
    <main className="font-poppins text-gray-900 bg-white min-h-screen w-full pt-[70px] md:pt-[85px]">
      <Container>
        <ProjectsSection />
        <h1>Meine Projekte</h1>
        <GitHubProjects username="canbeonline" />
      </Container>
    </main>
  );
}