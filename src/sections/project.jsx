import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return (
    <section className="py-16">
      <SectionHeading title="Projekte" />
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-brand-600">Drive More</h3>
          <p className="text-gray-700">KFZ-Meisterbetrieb Webseite mit Laravel & Tailwind und TailwindCSS.</p>
        </div>
        <div>
          <h3 className="font-semibold text-brand-600">Soleia Skincare</h3>
          <p className="text-gray-700">E-Commerce-Konzept für eine koreanische Skincare-Marke mit Laravel & Tailwind und TailwindCSS.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-brand-600">CanBeOnline</h3>
          <p className="text-gray-700">Eigene Agenturmarke – Fokus auf Webentwicklung, Branding und digitale Automatisierung.</p>
        </div>
      </div>
    </section>
  )
}