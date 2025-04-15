import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DCEEF2]">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
