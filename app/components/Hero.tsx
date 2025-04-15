export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-highlight px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-primary"
          />
        </div>
        <h1 className="text-6xl font-bold mb-6">
          SUGAM SRIVASTAVA
        </h1>
        <h2 className="text-2xl text-secondary mb-8">
          DATA SCIENTIST & MACHINE LEARNING ENGINEER
        </h2>
        <p className="text-xl text-secondary mb-12">
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
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
} 