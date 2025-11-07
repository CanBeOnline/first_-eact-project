import SectionHeading from '../components/SectionHeading'

export default function Hobbies() {
  return (
    <section className="py-16">
      <SectionHeading title="Hobbys" />
      <ul className="flex flex-wrap gap-4 text-gray-700">
        <li>✈️ Reisen</li>
        <li>📷 Fotografie</li>
        <li>🎨 Design</li>
      </ul>
    </section>
  )
}