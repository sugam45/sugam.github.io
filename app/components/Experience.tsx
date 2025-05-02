export default function Experience() {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Led machine learning projects and developed data-driven solutions"
    },
    {
      title: "Data Scientist",
      company: "AI Startup",
      period: "2019 - 2021",
      description: "Implemented ML models and improved data processing pipelines"
    },
    // Add more experiences
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-[#00010D] transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#00010D]">
                {exp.title}
              </h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 