import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';
import './Projects.css';

// Default projects
const DEFAULT_PROJECTS = [
  {
    _id: '1',
    title: 'Plant Disease Detection System',
    description:
      'AI-powered plant disease detection system developed using Deep Learning and Computer Vision techniques to identify crop diseases accurately and support smart agriculture solutions.',
    technologies: [
      'Python',
      'Deep Learning',
      'TensorFlow',
      'Computer Vision',
      'Machine Learning'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/Plant_Disease_Detection_System.git',
    image:
      'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&h=400&fit=crop',
    featured: true
  },

  {
    _id: '2',
    title: 'Email Spam & Phishing Detection System',
    description:
      'Machine Learning and NLP based cybersecurity system designed to detect spam emails and phishing attempts efficiently through intelligent text classification techniques.',
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Cybersecurity',
      'Data Analysis'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/NayanaBhagat28-Email_Spam_and_Phishing_Detection_System.git',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    featured: true
  },

  {
    _id: '3',
    title: 'CTI-NLP Enhanced Threat Analyzer',
    description:
      'Cyber Threat Intelligence analyzer integrated with NLP techniques for identifying and analyzing security threats using intelligent text processing and machine learning approaches.',
    technologies: [
      'Python',
      'NLP',
      'Machine Learning',
      'Cybersecurity',
      'Threat Analysis'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/CTI-NLP-Enhanced-Threat-Analyzer.git',
    image:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=400&fit=crop',
    featured: true
  },

  {
    _id: '4',
    title: 'AI Career Guide',
    description:
      'AI-powered career guidance platform designed to help students explore technology domains, career opportunities, and learning pathways in Artificial Intelligence and modern technologies.',
    technologies: [
      'Python',
      'Artificial Intelligence',
      'Career Guidance',
      'Machine Learning'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/AI_Career_Guide.git',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    featured: true
  },

  {
    _id: '5',
    title: 'Algo Quiz Master',
    description:
      'Interactive quiz application focused on algorithms, problem solving, and programming concepts designed to improve logical thinking and technical knowledge.',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Programming',
      'Algorithms'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/Algo_Quiz_Master.git',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
    featured: true
  },

  {
    _id: '6',
    title: 'Cognifyz Full Stack Internship Project',
    description:
      'Developed a responsive full stack web application during internship experience using modern frontend and backend technologies with CRUD operations, database integration, and user-friendly interface design.',
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'CRUD Operations'
    ],
    githubLink:
      'https://github.com/NayanaBhagat28/Cognifyz_Fullstack.git',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    featured: true
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await axios.get('/api/projects');

      if (response.data.success && response.data.data.length > 0) {
        setProjects(response.data.data);
      } else {
        setProjects(DEFAULT_PROJECTS);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(DEFAULT_PROJECTS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading) {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="loading">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore AI, Machine Learning, Cybersecurity, and Full Stack Development projects by Nayana Bhagath."
        />
      </Helmet>

      <section id="projects" className="section projects">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">
            Featured Projects
          </h2>

          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Here are some of my projects showcasing my interests in Artificial Intelligence,
            Machine Learning, Cybersecurity, and Full Stack Web Development.
          </p>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <div
                key={project._id}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay">

                    <div className="project-links">

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View on GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}

                    </div>
                  </div>
                </div>

                <div className="project-content">

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">

                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;