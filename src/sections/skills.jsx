import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section className="py-16">
      <SectionHeading title="Fähigkeiten" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
        <li>HTML5, CSS3, Tailwind CSS, JavaScrip</li>
        <li>React, Vite, Alpine.js</li>
        <li>SEO-Grundlagen, Performance-Optimierung</li>
        <li>Laravel, Livewire, PHP 8+</li>
        <li>E-Mail-Integration (Postmark, Mailtrap)</li>
        <li>Automatisierung mit n8n und AI-gestützte Workflows</li>
      </ul>
    </section>
  )
}