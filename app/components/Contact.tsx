export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#00010D]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-8">
          I'm always open to discussing data science projects and opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/sugam45"
            className="text-white hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sugam-srivastava-866b59170/"
            className="text-white hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:srivastavasugam99@gmail.com"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
} 