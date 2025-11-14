import Container from "../components/container.jsx";
import AboutSection from "../sections/about.jsx";

export default function About() {
  return (
    <main className="font-poppins text-sky-900 bg-white min-h-screen w-full">
      <Container>
        <AboutSection />
      </Container>
    </main>
  );
}