import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#00010D]">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
