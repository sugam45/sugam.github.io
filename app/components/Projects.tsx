export default function Projects() {
  const projects = [
    {
      title: "Machine Learning Pipeline Optimization",
      description: "Developed an end-to-end ML pipeline that improved model training efficiency by 40%",
      tags: ["Python", "scikit-learn", "MLflow", "Docker"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Time Series Forecasting System",
      description: "Built a forecasting system for retail sales prediction with 95% accuracy",
      tags: ["Python", "Prophet", "TensorFlow", "AWS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Created a real-time sentiment analysis tool for customer feedback",
      tags: ["BERT", "PyTorch", "FastAPI", "React"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-highlight mb-3">
                {project.title}
              </h3>
              <p className="text-secondary mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary text-highlight text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-highlight hover:text-secondary"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 