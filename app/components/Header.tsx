import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#00010D] shadow-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Sugam Srivastava
          </Link>
          <div className="flex gap-6">
            <Link href="#projects" className="text-white/80 hover:text-white">
              Projects
            </Link>
            <h1>
              |
            </h1>
            <Link href="#experience" className="text-white/80 hover:text-white">
              Experience
            </Link>
            <h1>
              |
            </h1>
            <Link href="#contact" className="text-white/80 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 