'use client'

import { useParams } from 'next/navigation'

const projectDetails = {
  'ml-pipeline': {
    title: "Machine Learning Pipeline Optimization",
    description: "Developed an end-to-end ML pipeline that improved model training efficiency by 40%",
    longDescription: "This project involved creating a comprehensive machine learning pipeline that significantly improved the efficiency of model training and deployment. The system incorporated automated data preprocessing, feature engineering, model selection, and hyperparameter tuning. By implementing parallel processing and optimized data structures, we achieved a 40% reduction in training time while maintaining model accuracy. The pipeline was containerized using Docker for easy deployment and included MLflow for experiment tracking and model versioning.",
    tags: ["Python", "scikit-learn", "MLflow", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Automated data preprocessing pipeline",
      "Parallel processing for faster training",
      "MLflow integration for experiment tracking",
      "Docker containerization for easy deployment",
      "Automated hyperparameter tuning"
    ]
  },
  'time-series': {
    title: "Time Series Forecasting System",
    description: "Built a forecasting system for retail sales prediction with 95% accuracy",
    longDescription: "Developed a sophisticated time series forecasting system specifically designed for retail sales prediction. The system combined multiple forecasting models including Prophet and custom neural networks to achieve 95% prediction accuracy. The solution included automated data cleaning, feature engineering, and model selection based on historical performance. The system was deployed on AWS with automated retraining and real-time prediction capabilities.",
    tags: ["Python", "Prophet", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Multiple model ensemble approach",
      "Automated data preprocessing",
      "Real-time prediction capabilities",
      "AWS cloud deployment",
      "Automated retraining pipeline"
    ]
  },
  'nlp-sentiment': {
    title: "NLP Sentiment Analysis",
    description: "Created a real-time sentiment analysis tool for customer feedback",
    longDescription: "Built a real-time sentiment analysis system using BERT and PyTorch for processing customer feedback. The system could analyze text in multiple languages and provide sentiment scores along with key topics and themes. The solution included a FastAPI backend for processing requests and a React frontend for visualization. The system achieved 92% accuracy in sentiment classification and was used to process over 10,000 customer reviews daily.",
    tags: ["BERT", "PyTorch", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Real-time sentiment analysis",
      "Multi-language support",
      "Topic extraction",
      "Interactive visualization dashboard",
      "High throughput processing"
    ]
  },
  'cv-detection': {
    title: "Computer Vision Object Detection",
    description: "Implemented a real-time object detection system for security applications",
    longDescription: "Developed a real-time object detection system using YOLOv5 and OpenCV for security applications. The system could detect and track multiple objects simultaneously with high accuracy. Implemented TensorRT optimization for improved inference speed, achieving real-time processing on edge devices. The solution included a custom training pipeline and data augmentation techniques to improve model robustness.",
    tags: ["OpenCV", "YOLOv5", "Python", "TensorRT"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Real-time object detection",
      "Multi-object tracking",
      "TensorRT optimization",
      "Edge device deployment",
      "Custom training pipeline"
    ]
  },
  'data-viz': {
    title: "Data Visualization Dashboard",
    description: "Built an interactive dashboard for real-time data analytics",
    longDescription: "Created an interactive data visualization dashboard using React and D3.js for real-time data analytics. The dashboard included multiple visualization types, interactive filters, and real-time data updates. The backend was built with Node.js and MongoDB, providing efficient data processing and storage. The solution was used by multiple teams for data-driven decision making and achieved a 30% improvement in data analysis efficiency.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Interactive visualizations",
      "Real-time data updates",
      "Custom chart components",
      "Responsive design",
      "Data export capabilities"
    ]
  },
  'recommendation': {
    title: "Recommendation Engine",
    description: "Developed a personalized recommendation system for e-commerce",
    longDescription: "Built a personalized recommendation engine for an e-commerce platform using collaborative filtering and content-based approaches. The system used the Surprise library for matrix factorization and implemented custom algorithms for cold-start problems. The solution was deployed using Flask and Redis for caching, achieving sub-100ms response times. The recommendations led to a 25% increase in user engagement and a 15% increase in sales.",
    tags: ["Python", "Surprise", "Flask", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Hybrid recommendation approach",
      "Real-time personalization",
      "Cold-start handling",
      "High-performance caching",
      "A/B testing framework"
    ]
  }
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectDetails[projectId as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-secondary mb-8">{project.longDescription}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-secondary">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary text-highlight text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="/#projects"
          className="text-highlight hover:text-secondary"
        >
          ← Back to Projects
        </a>
      </div>
    </div>
  )
} 