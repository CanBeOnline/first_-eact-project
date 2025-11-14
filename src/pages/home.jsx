import HeroSection from "../sections/hero.jsx";
import AboutSection from "../sections/about.jsx";
import SkillsSection from "../sections/skills.jsx";
import ProjectSection from "../sections/project.jsx";
import HobbiesSection from "../sections/hobbies.jsx";
import ContactSection from "../sections/contact.jsx";

import Container from "../components/container.jsx";
import LinkList from "../components/exercise.jsx";


export default function Home() {
  return (
    <main className="font-poppins text-sky-900 bg-white min-h-screen w-full">
      <Container>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <HobbiesSection />
        <ContactSection />

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4"></h2>
          < LinkList />
        </section>
      </Container>
    </main>
  );
}