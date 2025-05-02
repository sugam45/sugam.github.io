'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  const allProjects = [
    {
      id: 'ml-pipeline',
      title: "Machine Learning Pipeline Optimization",
      description: "Developed an end-to-end ML pipeline that improved model training efficiency by 40%",
      tags: ["Python", "scikit-learn", "MLflow", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'time-series',
      title: "Time Series Forecasting System",
      description: "Built a forecasting system for retail sales prediction with 95% accuracy",
      tags: ["Python", "Prophet", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'nlp-sentiment',
      title: "NLP Sentiment Analysis",
      description: "Created a real-time sentiment analysis tool for customer feedback",
      tags: ["BERT", "PyTorch", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'cv-detection',
      title: "Computer Vision Object Detection",
      description: "Implemented a real-time object detection system for security applications",
      tags: ["OpenCV", "YOLOv5", "Python", "TensorRT"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'data-viz',
      title: "Data Visualization Dashboard",
      description: "Built an interactive dashboard for real-time data analytics",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'recommendation',
      title: "Recommendation Engine",
      description: "Developed a personalized recommendation system for e-commerce",
      tags: ["Python", "Surprise", "Flask", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
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
              <Link
                href={`/projects/${project.id}`}
                className="text-highlight hover:text-secondary"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        {!showAll && allProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 