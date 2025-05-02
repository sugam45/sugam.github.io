export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-highlight px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img
            src="/image.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-2 border-primary"
          />
        </div>
        <h1 className="text-6xl font-bold mb-6">
          SUGAM SRIVASTAVA
        </h1>
        <h2 className="text-2xl font-semibold mb-8">
          DATA SCIENTIST | ML ENGINEER | B.TECH IITK'21
        </h2>
        <p className="text-xl font-semibold mb-12">
          Transforming data into actionable insights and building intelligent solutions
          that drive business value.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
} 