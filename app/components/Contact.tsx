export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-8">
          I'm always open to discussing data science projects and opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            className="text-white hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-white hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
} 