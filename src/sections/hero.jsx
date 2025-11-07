import Button from '../components/Button'

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-brand-700 mb-4">Ibrahim Can Uyan</h1>
      <p className="text-lg text-gray-600 mb-6">
        Full-Stack-Webentwickler
      </p>
      <Button label="Kontaktiere mich" href="#contact" />
    </section>
  )
}